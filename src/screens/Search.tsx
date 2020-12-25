import { useDebounce } from '@react-hook/debounce';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useNavigationSearchBarUpdate } from 'react-native-navigation-hooks';

import { GoogleBook, searchBooks } from '../api/books';
import Routes from '../screens/routes';
import { NavigationComponent } from '../types/navigation';

const Search: NavigationComponent = ({ componentId }) => {
    const [query, setQuery] = useDebounce<string>('skyward', 2000);
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

    const navigateToBookDetails = (book: GoogleBook) => {
        Navigation.push(componentId, {
            component: {
                name: Routes.BookDetails,
                passProps: {
                    book,
                },
            },
        });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                {results.map(book => {
                    return (
                        <TouchableHighlight
                            key={book.id}
                            style={styles.listItem}
                            onPress={() => navigateToBookDetails(book)}
                        >
                            <>
                                <Image
                                    resizeMode="contain"
                                    style={styles.image}
                                    source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
                                />
                                <Text style={styles.title}>{book.volumeInfo.authors}</Text>
                            </>
                        </TouchableHighlight>
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

const styles = StyleSheet.create({
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
        color: 'white',
    },
});

export default Search;
