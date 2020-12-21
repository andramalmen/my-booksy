import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Settings: React.FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings scren</Text>
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

export default Settings;
