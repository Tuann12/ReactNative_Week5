import { StyleSheet, Text, View, Image } from 'react-native';

import ScreenBlue from '../assets/screenBlue.png';
import Star from '../assets/star.png';
import Question from '../assets/question.png';
function Screen() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.imgPhoneContent} source={ScreenBlue} />
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
                {/* <Button style={styles.chooseColor} title="4 MÀU-CHỌN MUA"></Button>
                <Button style={styles.btnBuy} title="CHỌN MUA" /> */}
            </View>
        </View>
    );
}
export default Screen;

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

    // btnBuy: {
    //     width: 326,
    //     height: 44,
    //     fontSize: 20,
    //     fontWeight: 700,
    //     backgroundColor: '#CA1536',
    //     color: '#F9F2F2',
    // },
});
