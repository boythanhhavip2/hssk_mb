import React, { Component, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
// const FlatListItem = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <Text>{this.props.item.name}</Text>
//       <Text>{this.props.item.address}</Text>
//       <Text>{this.props.item.description}</Text>
//     </View>
//   )
// }

const Icon = {
  ic_ConnectHistory: require('../../../assets/imgs/home/ic_connect.png'),
  icHome: require('../../../assets/imgs/home/ic_home.png'),
  icScan: require('../../../assets/imgs/home/ic_scan.png'),
  icName: require('../../../assets/imgs/home/icon_name.png'),
  icAdd: require('../../../assets/imgs/home/icon_address.png'),
  icUp: require('../../../assets/imgs/home/icon_update.png'),
};

const FlatListItem = (props) => {
  const [patientRecords, setPatientRecords] = useState(flatListData);
  const deletePatientRecord = (index) => {
    const updatedRecords = [...patientRecords];
    updatedRecords.splice(index, 1);
    setPatientRecords(updatedRecords);
  };
    const swipeSettings = {
      autoClose: true,
      onClose: (setId, rowId, direction) => { },
      onOpen: (setId, rowId, direction) => { },
      right: [
        {
          onPress: () => { deletePatientRecord(props.index) },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: props.index,
      sectionId: 1
    };
    return (
      <Swipeout {...swipeSettings}>
        <View style={styles.container}>
          <View style={styles.containerFlatList}>
            <View style={styles.containerInfor}>
              <Image source={Icon.icName} style={styles.containerIcon} />
              <Text style={styles.textFlatlistItem}>
                {props.item.name}
              </Text>
            </View>
            <View style={styles.containerInfor}>
              <Image source={Icon.icAdd} style={styles.containerIcon} />
              <Text style={styles.textFlatlistItem}>
                {props.item.address}
              </Text>
            </View>
            <View style={styles.containerInfor}>
              <Image source={Icon.icUp} style={styles.containerIcon} />
              <Text style={styles.textFlatlistItem}>
                {props.item.description}
              </Text>
            </View>
          </View>
        </View>
      </Swipeout>
    );
  }
const ListFile = () => {
    const navigation = useNavigation();
    const handleHome = () => {
      navigation.navigate('Home');
    };
    const handleScan = () => {
      navigation.navigate('ScanFile');
    };
    const handleHistory = () => {
      navigation.navigate('ConnectHistory');
    };
    return (
        <View style={{ flex: 1 }}>
          <View style={{ justifyContent: 'center', backgroundColor: '#218AF5' }}>
            <Text
              style={{
                height: 45,
                color: '#fff',
                fontSize: 18,
                fontWeight: '600',
                padding: 10,
                left: 15,
              }}>
              Hồ sơ bệnh nhân
            </Text>
          </View>
          <FlatList
            data={flatListData}
            renderItem={({ item, index }) => {
              return <FlatListItem item={item} index={index}>

              </FlatListItem>;
              // <TouchableOpacity>
              //   <View style={styles.container}>
              //     <View style={styles.containerFlatList}>
              //       <View style={styles.containerInfor}>
              //         <Image source={Icon.icName} style={styles.containerIcon} />
              //         <Text style={styles.textFlatlistItem}>{item.name}</Text>
              //       </View>
              //       <View style={styles.containerInfor}>
              //         <Image source={Icon.icAdd} style={styles.containerIcon} />
              //         <Text style={styles.textFlatlistItem}>{item.address}</Text>
              //       </View>
              //       <View style={styles.containerInfor}>
              //         <Image source={Icon.icUp} style={styles.containerIcon} />
              //         <Text style={styles.textFlatlistItem}>
              //           {item.description}
              //         </Text>
              //       </View>
              //     </View>
              //   </View>
              // </TouchableOpacity>
            }}
          />
          <View style={styles.taskbar}>
            <View style={styles.taskbarcontainer}>
              <TouchableOpacity onPress={handleHome}>
                <View style={styles.icontaskContainer}>
                  <Image source={Icon.icHome} style={styles.icontask} />
                  <Text style={styles.textIconTask}>Trang chủ</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.taskbarcontainer}>
              <TouchableOpacity onPress={handleScan}>
                <View style={styles.icontaskContainer}>
                  <Image source={Icon.icScan} style={styles.icontask} />
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
    );
  };
  // const [swipeBtns, setSwipeBtns] = useState([
  //   {
  //     text: 'Delete',
  //     backgroundColor: 'red',
  //     onPress: () => {
  //       // Xử lý logic khi người dùng nhấn nút Delete
  //       // Ví dụ: Xóa hồ sơ bệnh nhân tại đây
  //     },
  //   },
  // ]);

  // // Giả định danh sách hồ sơ bệnh nhân
  // const [patientRecords, setPatientRecords] = useState([
  //   { id: 1, name: 'Nguyễn Văn A', address: '123 Đường ABC, Quận XYZ' },
  //   { id: 2, name: 'Nguyễn Thị B', address: '456 Đường DEF, Quận UVW' },
  //   // Thêm các hồ sơ khác vào đây
  // ]);

  // // Hàm xử lý khi người dùng chọn một hồ sơ để cập nhật
  // const handleUpdateProfile = key => {
  //   // Chuyển đến trang cập nhật thông tin với id của hồ sơ
  //   navigation.navigate('updateProfile', {profileKey: key});
  // };;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#EFECEC',
    padding: 20,
    paddingBottom: 5,
  },
  containerFlatList: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.50)',
    height: 110,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 13,
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    gap: 10,
  },
  containerInfor: {
    flex: 1,
    flexDirection: 'row',
  },
  containerIcon: {
    height: 15,
    width: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  textFlatlistItem: {
    gap: 13,
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
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
    alignItems: 'center',
  },
  icontask: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  textIconTask: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default ListFile;
