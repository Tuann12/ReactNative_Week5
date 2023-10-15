import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ScreenBlue from '../assets/screenBlue.png';
import Star from '../assets/star.png';
import Question from '../assets/question.png';
import Arrow from '../assets/arrow.png';
function HomeScreen({ navigation, route }) {
    const imgPhone = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.imgPhoneContent} source={imgPhone == undefined ? ScreenBlue : imgPhone.imgPhone} />

                <Text style={styles.titlePhoneContent}>Điện thoại Vsmart Joy 3 - Hàng chính hảng</Text>

                <View style={styles.evaluatePhone}>
                    <View style={styles.StarEvaluate}>
                        <Image style={styles.iconStar} source={Star} />
                        <Image style={styles.iconStar} source={Star} />
                        <Image style={styles.iconStar} source={Star} />
                        <Image style={styles.iconStar} source={Star} />
                        <Image style={styles.iconStar} source={Star} />
                    </View>
                    <View style={styles.seeEvaluate}>(Xem 828 đánh giá)</View>
                </View>

                <View style={styles.price}>
                    <Text style={styles.currentPrice}>1.790.000 đ</Text>
                    <Text style={styles.tuberPrice}>1.790.000 đ</Text>
                </View>

                <View style={styles.childContent}>
                    <Text style={styles.titleChildContent}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image style={styles.iconChildContent} source={Question} />
                </View>

                <TouchableOpacity style={styles.btnPickColor} onPress={() => navigation.navigate('PickColor')}>
                    <Text style={styles.txtPickColor}>4 MÀU-CHỌN MÀU</Text>
                    <Image style={styles.iconPickColor} source={Arrow} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnBuy} onPress={() => alert('Mua hàng thành công')}>
                    <Text style={styles.txtBuy}>CHỌN MUA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    imgPhoneContent: {
        width: 301,
        height: 361,
    },

    titlePhoneContent: {
        fontSize: 15,
        fontWeight: 400,
    },

    evaluatePhone: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
    },

    StarEvaluate: {
        flexDirection: 'row',
        marginRight: 20,
    },

    iconStar: {
        width: 20,
        height: 22,
        marginRight: 5,
    },

    price: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },

    currentPrice: {
        fontSize: 18,
        fontWeight: 700,
        marginRight: 37,
    },

    tuberPrice: {
        fontSize: 15,
        fontWeight: 700,
        color: 'rgba(0, 0, 0, 0.58)',
        position: 'relative',
    },

    childContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },

    titleChildContent: {
        fontSize: 12,
        fontWeight: 700,
        color: '#FA0000',
        marginRight: 8,
    },

    iconChildContent: {
        width: 20,
        height: 20,
    },

    btnPickColor: {
        width: 326,
        height: 44,
        marginTop: 15,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.46)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    txtPickColor: {
        fontSize: 15,
        fontWeight: 400,
    },
    iconPickColor: {
        position: 'absolute',
        width: 11.5,
        height: 14,
        top: 14,
        right: 20,
    },
    btnBuy: {
        width: 326,
        height: 44,
        borderRadius: 10,
        backgroundColor: 'rgba(238, 10, 10, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
    },
    txtBuy: {
        fontSize: 20,
        fontWeight: 700,
        color: 'white',
    },
});
