import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const UpdateProfile = ({ route }) => {
  const { profileKey } = route.params; // Lấy id của hồ sơ từ route

  // Giả định bạn có một hồ sơ bệnh nhân với id tương ứng
  const [patientInfo, setPatientInfo] = useState({
    key: profileKey,
    name: 'Nguyễn Văn A',
    address: '123 Đường ABC, Quận XYZ',
    // Thêm thông tin khác của hồ sơ
  });

  // Hàm xử lý cập nhật thông tin hồ sơ
  const handleUpdate = () => {
    // Xử lý cập nhật thông tin ở đây (ví dụ: gửi dữ liệu lên máy chủ)
    // Sau khi cập nhật thành công, có thể điều hướng người dùng trở lại danh sách hồ sơ
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>Cập nhật thông tin hồ sơ</Text>
      <TextInput
        placeholder="Họ và tên"
        value={patientInfo.name}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, name: text })}
        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      />
      <TextInput
        placeholder="Địa chỉ"
        value={patientInfo.address}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, address: text })}
        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      />
      {/* Thêm các trường thông tin khác cần cập nhật */}
      <Button title="Cập nhật" onPress={handleUpdate} />
    </View>
  );
};

export default UpdateProfile;
