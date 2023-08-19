import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CreateFile = () => {
    return (
        <View style={styles.container}>
            <Text>màn thêm mới hố sơ</Text>
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

export default CreateFile;
