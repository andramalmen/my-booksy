import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen: React.FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home screen</Text>
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

export default HomeScreen;
