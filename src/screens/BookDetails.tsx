import * as React from 'react';
import { Image, ImageStyle, ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-themed-styles';

import { GoogleBook } from '../api/books';
import { NavigationComponent } from '../types/navigation';
import { styleSheetFactory } from '../utils/theme';

interface BookDetailsProps {
    book: GoogleBook;
}

const themedStyles = styleSheetFactory(theme => ({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 16,
        height: 250,
        borderWidth: 1,
        borderColor: 'white',
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 8,
        paddingLeft: 8,
        paddingRight: 16,
    },
    backgroundImage: {
        width: '100%',
        height: 250,
        position: 'absolute',
    },
    image: {
        height: 200,
        width: 150,
        marginLeft: 8,
    },
    title: {
        fontSize: 20,
        color: theme.textColor,
        fontWeight: '600',
        marginBottom: 8,
    },
    subtitle: {
        color: theme.textColor,
        marginBottom: 4,
    },
    description: {
        color: theme.textColor,
        fontSize: 12,
        paddingRight: 10,
    },
}));

const BookDetails: NavigationComponent<BookDetailsProps> = ({ book }) => {
    const [styles] = useTheme(themedStyles);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    resizeMode="cover"
                    blurRadius={10}
                    style={styles.backgroundImage as ImageStyle}
                    source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
                />
                <Image
                    resizeMode="contain"
                    style={styles.image as ImageStyle}
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

export default BookDetails;
