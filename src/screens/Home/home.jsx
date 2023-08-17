import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, Dimensions, ScrollView, Image, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');
const Icon = {
  backgroundImg: require('../../assets/imgs/home/bghome.png'),
  icUser: require('../../assets/imgs/home/ic_user.png'),
  icNotify: require('../../assets/imgs/home/ic_notify.png'),
  icAdduser: require('../../assets/imgs/home/ic_add_user.png'),
  icHospital: require('../../assets/imgs/home/hospital.png'),
  icListcheck: require('../../assets/imgs/home/list_check.png'),
  ic_ConnectHistory: require('../../assets/imgs/home/ic_connect.png'),
  icHome: require('../../assets/imgs/home/ic_home.png'),
  icScan: require('../../assets/imgs/home/ic_scan.png'),

};

const Home = () => {
  const [imgActive, setImgActive] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);
  const stepScroll = useRef(null);
  const navigation = useNavigation();
  const handleAdd = () => {
    navigation.navigate('CreateFile');
  };
  const handleList = () => {
    navigation.navigate('ListFile');
  };
  const handleHospital = () => {
    navigation.navigate('ListHospital');
  };
  const handleHome = () => {
    navigation.navigate('Home');
  };
  const handleScan = () => {
    navigation.navigate('ScanFile');
  };
  const handleHistory = () => {
    navigation.navigate('ConnectHistory')
  }

  useEffect(() => {
    const imgs = [
      <Image
        key={0}
        source={require('../../assets/imgs/home/home1.png')}
        resizeMode='stretch'
        style={{ width: screenWidth, height: '100%' }}
      />,
      <Image
        key={1}
        source={require('../../assets/imgs/home/home2.png')}
        resizeMode='stretch'
        style={{ width: screenWidth, height: '100%' }}
      />,
      <Image
        key={2}
        source={require('../../assets/imgs/home/home3.png')}
        resizeMode='stretch'
        style={{ width: screenWidth, height: '100%' }}
      />,
    ];
    setImgActive(imgs);
  }, []);

  useEffect(() => {
    if (imgActive.length > 0 && stepScroll.current) {
      let index = 0;
      const interval = setInterval(() => {
        stepScroll.current.scrollTo({ x: index * screenWidth, y: 0, animated: true });
        index = (index + 1) % imgActive.length;
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [imgActive]);

  const handleScroll = (event) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const imageIndex = Math.round(xOffset / screenWidth);
    setCurrentImg(imageIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <View style={styles.top}>
          <ImageBackground
            source={Icon.backgroundImg}
            style={styles.backgroundImg}
          />
          <Image
            source={Icon.icUser}
            style={styles.icUser}
          />
          <Image
            source={Icon.icNotify}
            style={styles.icNotify}
          />
          <View style={styles.texthello}>
            <Text style={styles.textrow}> Xin chào,</Text>
            <Text style={styles.textrow1}> Nguyễn Hữu Hưng</Text>
          </View>
        </View>
        <View style={{ width: screenWidth, height: 380 }}>
          <ScrollView
            horizontal
            pagingEnabled
            contentContainerStyle={{ width: screenWidth * imgActive.length, height: 380 }}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            ref={stepScroll}
            showsHorizontalScrollIndicator={false} // Bỏ thanh trượt ngang
          >
            {imgActive.map((image, index) => (
              <View key={index.toString()}>{image}</View>
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {imgActive.map((image, index) => (
              <Text
                key={index}
                style={currentImg === index ? styles.dotActive : styles.dot}
              >
                ●
              </Text>
            ))}
          </View >
        </View>

        <View style={styles.listmenu}>
          <View style={styles.iconcontainer}>
            <TouchableOpacity onPress={handleAdd}>
              <View style={styles.viewIcon}>
                <Image
                  source={Icon.icAdduser}
                  style={styles.iconmenu}
                />
                <Text style={styles.icontext}>Tạo mới hồ sơ</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.iconcontainer}>
            <TouchableOpacity onPress={handleList}>
              <View style={styles.viewIcon}>
                <Image
                  source={Icon.icListcheck}
                  style={styles.iconmenu}
                />
                <Text style={styles.icontext}>Hồ sơ bệnh nhân</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.iconcontainer}>
            <TouchableOpacity onPress={handleHospital}>
              <View style={styles.viewIcon}>
                <Image
                  source={Icon.icHospital}
                  style={styles.iconmenu}
                />
                <Text style={styles.icontext}>Cơ sở y tế</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.taskbar}>
          <View style={styles.taskbarcontainer}>
            <TouchableOpacity onPress={handleHome}>
              <View style={styles.icontaskContainer}>
                <Image
                  source={Icon.icHome}
                  style={styles.icontask}
                />
                <Text style={styles.textIconTask}>Trang chủ</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.taskbarcontainer}>
            <TouchableOpacity onPress={handleScan}>
              <View style={styles.icontaskContainer}>
                <Image
                  source={Icon.icScan}
                  style={styles.icontask}
                />
                <Text style={styles.textIconTask}>Scan</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.taskbarcontainer}>
            <TouchableOpacity onPress={handleHistory}>
              <View style={styles.icontaskContainer}>
                <Image
                  source={Icon.ic_ConnectHistory}
                  style={styles.icontask}
                />
                <Text style={styles.textIconTask}>Lịch sử kết nối</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    fontFamily: 'Inter',
  },
  top: {
    height: 185,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

  },
  backgroundImg: {
    width: '100%',
    height: 185,
    resizeMode: 'cover',
  },
  icUser: {
    position: 'absolute',
    width: 45,
    height: 45,
    flexShrink: 0,
    left: 30,
    top: 45,

  },
  icNotify: {
    position: 'absolute',
    width: 45,
    height: 45,
    flexShrink: 0,
    left: 330,
    top: 45,
  },
  texthello: {
    position: 'absolute',
    flexDirection: 'column',
    left: 85,
    top: 50,
    fontFamily: 'Inter',
    textAlign: 'center',

  },
  textrow: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },
  textrow1: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: '#FFFFFF',
  },
  dot: {
    margin: 3,
    color: '#818181',
  },
  listmenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    paddingLeft: 20,
    paddingRight: 20
  },

  viewIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconmenu: {
    width: 40,
    height: 40,

  },
  icontext: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',

  },
  taskbar: {
    display: 'flex',
    flexDirection: 'row',

  },
  taskbarcontainer: {
    flex: 1,
    backgroundColor: '#000000',
    paddingVertical: 20,
    marginTop: 5,
    alignItems: 'center',

  },
  icontaskContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icontask: {
    width: 30,
    height: 30,
    marginBottom: 5

  },
  textIconTask: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  }
});

export default Home;
