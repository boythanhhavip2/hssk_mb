import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    StyleSheet,
} from 'react-native';

const OTPConfirmationDialog = ({ visible, onClose, phoneNumber }) => {
    const [otpCode, setOtpCode] = useState('');
    const [timer, setTimer] = useState(60);
    const hiddenPhoneNumber = phoneNumber.replace(/\d{4}$/, 'xxxx'); //ẩn 4 số cuối  của số điện thoại

    useEffect(() => {
        if (timer > 0 && visible) {
            const interval = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [timer, visible]);

    const handleRequestNewCode = () => {
        setTimer(60); // Reset lại timer
    };
    const handleConfirm = () => {
        // Thực hiện logic xác nhận OTP ở đây
        // Ví dụ, cho rằng việc xác nhận OTP thành công
        setTimer(60);
        onClose();
    };

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.container}>
                <View style={styles.dialog}>
                    <View style={styles.notification}>
                        <Text style={styles.notificationText}>
                            Xác nhận OTP
                        </Text>
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Text style={styles.closeButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.divider}></View>
                    <Text style={styles.textOtp}>
                        Vui lòng nhập mã xác thực gửi đến số{' '}
                        <Text style={styles.hiddenPhoneNumber}>{hiddenPhoneNumber}</Text>
                    </Text>
                    <View style={styles.textRowContainer}>
                        <Text style={styles.title}>Mã OTP</Text>
                        <Text style={styles.texticon}>*</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setOtpCode}
                        value={otpCode}
                        placeholder="Nhập mã OTP"
                        keyboardType="numeric"
                    />
                    <Text style={styles.timerText}>
                        {timer > 0 ? (
                            <Text>
                                <Text style={styles.timerUnit}>Mã xác thực có hiệu lực: </Text>
                                <Text style={styles.timerValue}>{timer}s</Text>
                            </Text>
                        ) : (
                            <Text style={styles.requestNewCode} onPress={handleRequestNewCode}>
                                Yêu cầu mã xác thực mới !!!
                            </Text>
                        )}
                    </Text>
                    <TouchableOpacity
                        style={styles.confirmButton}
                        onPress={handleConfirm}
                        disabled={timer <= 0}
                    >
                        <Text style={styles.confirmButtonText}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
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
        height: 270
    },
    notification: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    closeButton: {
        width: 22,
        height: 22,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    closeButtonText: {
        color: '#000',
        fontSize: 14,
        fontWeight: '700'
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
    textOtp: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        color: '#000',
        marginBottom: 5
    },
    hiddenPhoneNumber: {
        fontWeight: 'bold'
    },
    textRowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    texticon: {
        bottom: '1%',
        marginLeft: 2,
        fontSize: 14,
        color: 'red',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 38,
        borderRadius: 20,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        paddingLeft: 23,
        marginBottom: 5
    },
    timerText: {
        color: '#000',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 5,
        marginBottom: 10
    },
    timerValue: {
        color: '#0A62CE'
    },
    requestNewCode: {

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

export default OTPConfirmationDialog;
