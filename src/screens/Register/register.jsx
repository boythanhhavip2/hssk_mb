import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

const Register = () => {
  const backgroundImage = require('../../assets/imgs/login/bg.png');
  const overlayImage = require('../../assets/imgs/login/logo.png');
  const [Name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onChangeName = text => {
    setName(text);
  }
  const onChangePhoneNumber = text => {
    setPhoneNumber(text);
  };
  const onChangePassword = text => {
    setPassword(text);
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const navigation = useNavigation();
  const handleRegis = () => {
    // Chuyển hướng sang trang khác (ví dụ: HomeScreen)
    if (phoneNumber.trim() === '' || password.trim() === '') {
      setShowErrorMessage(true);
      return;
    }
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        />
        <View style={styles.overlay}>
          <Image source={overlayImage} style={styles.overlayImage} />
        </View>
        <Text style={[styles.text, styles.topText]}>HSSK</Text>
        <Text style={[styles.text, styles.bottomText]}>Hồ sơ sức khỏe</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.regis}>Đăng ký</Text>
        <View style={styles.containerinput}>
          <Text style={styles.textdk}>Họ và tên</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={Name}
            placeholder="Họ và tên"
            keyboardType="default"
            onSubmitEditing={dismissKeyboard}
          />
          <View style={{ height: 20 }} />
          <View style={styles.textRowContainer}>
            <Text style={styles.textdk}>Số điện thoại</Text>
            <Text style={styles.texticon}>*</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangePhoneNumber}
            value={phoneNumber}
            placeholder="Nhập số điện thoại"
            keyboardType="numeric"
            onSubmitEditing={dismissKeyboard}
          />
          {showErrorMessage && phoneNumber.trim() === '' && (
            <Text style={styles.errorMessage}>Không được bỏ trống trường này!!!</Text>
          )}
          <View style={{ height: 20 }} />
          <View style={styles.textRowContainer}>
            <Text style={styles.textdk}>Mật khẩu</Text>
            <Text style={styles.texticon}>*</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Nhập mật khẩu"
            keyboardType="default"
            onSubmitEditing={dismissKeyboard}
          />
          {showErrorMessage && password.trim() === '' && (
            <Text style={styles.errorMessage}>Không được bỏ trống trường này!!!</Text>
          )}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegis}>
          <Text style={styles.buttonregis}>Đăng ký</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonlg}>Đăng ký</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    fontFamily: 'Inter',
  },
  top: {
    height: 285,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: -36,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 285,
    resizeMode: 'cover',
  },
  overlayImage: {
    width: 99,
    height: 99,
    position: 'absolute',
    right: 10,
    bottom: '70%',
    resizeMode: 'contain',
    overlayColor: '#007AFE',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    left: '48%',
    color: 'white',
    textAlign: 'center',
  },
  topText: {
    top: '36%',
    fontSize: 32,
    fontWeight: 700,
  },
  bottomText: {
    bottom: '42%',
    fontSize: 18,
    fontWeight: 500,
  },
  bottom: {
    flex: 1,
    height: 500,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  regis: {
    zIndex: 1,
    color: '#000',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 39,
  },
  containerinput: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'flex-start',
    height: 305,
    marginTop: 22,
    // alignItems: 'center'
  },
  errorMessage: {
    color: 'red',
    fontSize: 10,
    fontWeight: '400',
    marginTop: 5,
    textAlign: 'left'
  },
  textRowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  texticon: {
    bottom: '2%',
    marginLeft: 8,
    fontSize: 14,
    color: 'red',
  },
  textdk: {
    alignSelf: 'flex-start',
    fontSize: 14,
    top: '-2%',
    left: 5,
    fontWeight: '500'
  },
  input: {
    width: 327,
    height: 44,
    borderRadius: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    paddingLeft: 23,
  },
  buttonregis: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 14,
    color: '#FFF',
  },
  button: {
    width: 327,
    height: 44,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#141ED2',
    justifyContent: 'center',
    marginTop: -20
  },
});

export default Register;
