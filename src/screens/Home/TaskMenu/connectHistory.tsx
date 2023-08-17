import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ConnectHistory = () => {
    return (
        <View style={styles.container}>
            <Text>màn lịch sử kết nối</Text>
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

export default ConnectHistory;