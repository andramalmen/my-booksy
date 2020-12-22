import { useDebounce } from '@react-hook/debounce';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigationSearchBarUpdate } from 'react-native-navigation-hooks';

import { GoogleBook, searchBooks } from '../api/books';

const Search: React.FunctionComponent<{ componentId: string }> = ({ componentId }) => {
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
        console.log('SEARCH FOR', query);
        if (!query) {
            return;
        }
        searchBooks(query).then(res => setResults(res));
    }, [query]);

    return (
        <ScrollView>
            <View style={styles.container}>
                {results.map(book => {
                    return (
                        <View key={book.id} style={styles.listItem}>
                            <Image
                                resizeMode="contain"
                                style={styles.image}
                                source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
                            />
                            <Text style={styles.title}>{book.volumeInfo.authors}</Text>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
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
