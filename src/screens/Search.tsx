import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Search: React.FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Search scren</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    },
});

export default Search;
