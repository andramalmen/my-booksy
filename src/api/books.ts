export interface GoogleBook {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        publisher: string;
        description: string;
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
    };
}

export const searchBooks = async (query: string): Promise<GoogleBook[]> => {
    try {
        const results = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
        );

        const json = await results.json();
        return (json.items as GoogleBook[]).filter(item => item.volumeInfo.imageLinks.thumbnail);
    } catch (err) {
        console.log(err);
        return [];
    }
};
