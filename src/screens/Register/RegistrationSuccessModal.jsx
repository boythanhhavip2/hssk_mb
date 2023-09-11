import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const RegistrationSuccessModal = ({isVisible, onClose}) => {
  const navigation = useNavigation();
  const handleConfirm = () => {
    onClose();
    navigation.navigate('Login');
};
  return (
    <Modal isVisible={isVisible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.dialog}>
          <View style={styles.notification}>
            <Text style={styles.notificationText}>Đăng ký</Text>
          </View>
          <View style={styles.divider}></View>
          <Text style={styles.textDialog}>
            Bạn đã đăng ký tài khoản thành công !!!
          </Text>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText} onPress={handleConfirm}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialog: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 338,
    height: 160
},
notification: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
},
  notificationText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10,
      flex: 1,
      textAlign: 'center'
  },
  divider: {
      height: 1,
      backgroundColor: '#DDD',
      marginBottom: 10,
  },
  textDialog: {
      textAlign: 'center',
      fontSize: 14,
      fontWeight: '400',
      color: '#000',
      marginBottom: 5
  },
  confirmButton: {
      display: 'flex',
      width: 111,
      height: 35,
      backgroundColor: '#141ED2',
      borderRadius: 5,
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 10
  },
  confirmButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 14,
      textAlign: 'center'
  },
});

export default RegistrationSuccessModal;
