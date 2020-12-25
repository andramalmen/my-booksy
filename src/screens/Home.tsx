import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationComponent } from '../types/navigation';

const Home: NavigationComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home screen</Text>
        </View>
    );
};

Home.options = () => {
    return {
        topBar: {
            searchBar: {
                visible: true,
                hideOnScroll: true,
                placeholder: 'Search your library ...',
            },
            title: {
                text: 'My Booksy',
            },
        },
    };
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

export default Home;
