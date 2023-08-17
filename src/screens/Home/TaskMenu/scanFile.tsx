import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ScanFile = () => {
    return (
        <View style={styles.container}>
            <Text>màn Scan</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ScanFile;