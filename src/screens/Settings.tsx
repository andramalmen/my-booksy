import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationComponent } from '../types/navigation';

const Settings: NavigationComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings scren</Text>
        </View>
    );
};

Settings.options = () => {
    return {
        topBar: {
            title: {
                text: 'Settings',
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

export default Settings;
