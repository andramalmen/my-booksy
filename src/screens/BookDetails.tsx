import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { GoogleBook } from '../api/books';
import { NavigationComponent } from '../types/navigation';

interface BookDetailsProps {
    book: GoogleBook;
}

const BookDetails: NavigationComponent<BookDetailsProps> = ({ book }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{book.volumeInfo.title}</Text>
                    <Text style={styles.subtitle}>By {book.volumeInfo.authors.join(', ')}</Text>
                    <Text style={styles.description} numberOfLines={10}>
                        {book.volumeInfo.description}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

BookDetails.options = passProps => {
    return {
        topBar: {
            title: {
                text: passProps?.book.volumeInfo.title ?? 'Unknown',
            },
        },
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 16,
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 8,
    },
    image: {
        height: 200,
        width: 150,
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
        marginBottom: 8,
    },
    subtitle: {
        color: 'white',
        marginBottom: 4,
    },
    description: {
        color: 'white',
        fontSize: 12,
        paddingRight: 10,
    },
});

export default BookDetails;
