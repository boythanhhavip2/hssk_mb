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

const Login = () => {
  const backgroundImage = require('../../assets/imgs/login/bg.png');
  const overlayImage = require('../../assets/imgs/login/logo.png');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

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
  const headForgot = () => {
    navigation.navigate('Forgot')
  };// khi ấn vào nút quên mật khẩu sẽ chuyển đến màn  quên mật khẩu
  const handleRegis = () => {
    navigation.navigate('Register')
  };
  const handleLogin = () => {
    // Chuyển hướng sang trang khác (ví dụ: HomeScreen)
    navigation.navigate('Home');
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
        <Text style={styles.login}>Đăng nhập</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <Image
              source={require('../../assets/imgs/login/icon_phone.png')} // Đường dẫn tới tệp ảnh biểu tượng
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangePhoneNumber}
              value={phoneNumber}
              placeholder="Nhập số điện thoại"
              keyboardType="numeric"
              onSubmitEditing={dismissKeyboard}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <View>
              <Image
                source={require('../../assets/imgs/login/ic_keylock.png')} // Đường dẫn tới tệp ảnh biểu tượng
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Nhập mật khẩu"
                keyboardType="default"
                onSubmitEditing={dismissKeyboard}
              />
            </View>
            <Image
              source={require('../../assets/imgs/login/ic_clippath.png')}
              style={styles.iconclip}
            />
          </View>

          <View style={{ width: 327 }}>
            <Text style={styles.forgot} onPress={headForgot}>
              Quên mật khẩu?
            </Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonlg}>Đăng nhập</Text>
          </TouchableOpacity>
          <View style={styles.rowContainer}>
            <Text style={styles.textRow}>Bạn chưa có tài khoản? </Text>
            <Text style={styles.textRow1} onPress={handleRegis}>
              Đăng Kí Ngay
            </Text>
          </View>
        </View>
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
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  login: {
    zIndex: 1,
    color: '#000',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 39,
  },
  input: {
    textAlign: 'auto',
    width: 327,
    height: 44,
    borderRadius: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    marginTop: 32,
    paddingLeft: 60,
  },
  forgot: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#0A62CE',
    alignSelf: 'flex-end',
    marginTop: 22,
  },
  button: {
    width: 327,
    height: 44,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#141ED2',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  buttonlg: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 14,
    color: '#FFF',
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 20,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center'
  },
  textRow: {
    color: '#000'
  },
  textRow1: {
    color: '#0A62CE'
  },

  icon: {
    top: '55%',
    height: 24,
    width: 24,
    left: "5%",
    position: 'absolute',
    zIndex: 1,

  },
  iconclip: {
    top: '55%',
    height: 24,
    width: 24,
    left: "70%",
    position: 'absolute',
    zIndex: 1
  }
});

export default Login;
