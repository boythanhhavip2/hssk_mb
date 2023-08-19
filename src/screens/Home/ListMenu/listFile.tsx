import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ListFile = () => {
    return (
        <View style={styles.container}>
            <Text>màn danh sách hố sơ</Text>
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

export default ListFile;
