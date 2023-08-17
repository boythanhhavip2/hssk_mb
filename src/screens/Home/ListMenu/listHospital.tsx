import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ListHospital = () => {
    return (
        <View style={styles.container}>
            <Text>màn danh sách bệnh viện</Text>
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

export default ListHospital;