import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ScreenBlue from '../assets/screenBlue.png';
import ScreenRed from '../assets/screenRed.png';
import ScreenBlack from '../assets/screenBlack.png';
import ScreenSilver from '../assets/screenSilver.png';
function PickColor({ navigation }) {
    const [image, setImage] = useState(ScreenBlue);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imgHeader} source={image} />
                <Text style={styles.txtHeader}>
                    Điện thoại Vsmart Joy 3 <br /> Hàng chính hảng
                </Text>
            </View>

            <View style={styles.chooseColor}>
                <Text style={styles.txtChooseColor}>Chọn một màu bên dưới:</Text>
                <View style={styles.bodyChooseColor}>
                    <TouchableOpacity
                        style={[styles.colorBodyChooseColor, { backgroundColor: 'rgba(197, 241, 251, 1)' }]}
                        onPress={() => setImage(ScreenSilver)}
                    />
                    <TouchableOpacity
                        style={[styles.colorBodyChooseColor, { backgroundColor: 'rgba(243, 13, 13, 1)' }]}
                        onPress={() => setImage(ScreenRed)}
                    />
                    <TouchableOpacity
                        style={[styles.colorBodyChooseColor, { backgroundColor: 'rgba(0, 0, 0, 1)' }]}
                        onPress={() => setImage(ScreenBlack)}
                    />
                    <TouchableOpacity
                        style={[styles.colorBodyChooseColor, { backgroundColor: 'rgba(35, 72, 150, 1)' }]}
                        onPress={() => setImage(ScreenBlue)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.btnDone}
                    onPress={() => navigation.navigate('HomeScreen', { imgPhone: image })}
                >
                    <Text style={styles.txtDone}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PickColor;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        padding: 5,
    },
    imgHeader: {
        width: 112,
        height: 132,
    },
    txtHeader: {
        fontSize: 15,
        fontWeight: 400,
        padding: 10,
    },
    chooseColor: {
        marginTop: 10,
        backgroundColor: 'rgba(196, 196, 196, 1)',
        paddingBottom: 15,
    },
    txtChooseColor: {
        fontSize: 18,
        fontWeight: 400,
        paddingTop: 5,
        paddingLeft: 20,
    },
    bodyChooseColor: {
        alignItems: 'center',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    colorBodyChooseColor: {
        width: 85,
        height: 80,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    btnDone: {
        width: 326,
        height: 44,
        backgroundColor: 'rgba(25, 82, 226, 0.58)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 'auto',
    },
    txtDone: {
        color: 'white',
        fontSize: 20,
        fontWeight: 700,
    },
});
