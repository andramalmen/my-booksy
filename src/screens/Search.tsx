import { useDebounce } from '@react-hook/debounce';
import * as React from 'react';
import { Image, ImageStyle, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigationSearchBarUpdate } from 'react-native-navigation-hooks';
import { useTheme } from 'react-native-themed-styles';

import { GoogleBook, searchBooks } from '../api/books';
import Routes from '../screens/routes';
import { NavigationComponent } from '../types/navigation';
import { navigateTo } from '../utils/navigation';
import { styleSheetFactory } from '../utils/theme';

const themedStyles = styleSheetFactory(theme => ({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 16,
    },
    listItem: {
        width: '50%',
        alignItems: 'center',
        marginBottom: 16,
    },
    image: {
        width: 150,
        height: 200,
    },
    title: {
        marginTop: 8,
        color: theme.textColor,
    },
}));

const Search: NavigationComponent = ({ componentId }) => {
    const [styles] = useTheme(themedStyles);
    const [query, setQuery] = useDebounce<string>('', 500);
    const [results, setResults] = React.useState<GoogleBook[]>([]);

    useNavigationSearchBarUpdate(
        e => {
            if (e.isFocused) {
                setQuery(e.text);
            } else {
                setQuery(e.text);
            }
        },
        { componentId }
    );

    React.useEffect(() => {
        if (!query) {
            return;
        }
        searchBooks(query).then(res => setResults(res));
    }, [query]);

    const navigateToBookDetails = (book: GoogleBook) =>
        navigateTo(componentId, Routes.BookDetails, { book });

    if (!results.length) {
        return (
            <View>
                <Text>No results</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {results.map(book => {
                    return (
                        <TouchableOpacity
                            key={book.id}
                            style={styles.listItem}
                            onPress={() => navigateToBookDetails(book)}
                        >
                            <>
                                <Image
                                    resizeMode="contain"
                                    style={styles.image as ImageStyle}
                                    source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
                                />
                                <Text style={styles.title}>{book.volumeInfo.authors}</Text>
                            </>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </ScrollView>
    );
};

Search.options = () => {
    return {
        topBar: {
            searchBar: {
                visible: true,
                hideOnScroll: true,
                placeholder: 'Search by title, author or ISBN',
            },
            title: {
                text: 'Find books',
            },
        },
    };
};

export default Search;
