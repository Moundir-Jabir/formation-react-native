import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { styles, colors } from '../style/style'

export default function WelcomeScreen() {
    return (
        <ImageBackground style={style.background} resizeMode="cover" source={require('../../assets/background.jpg')}>
            <SafeAreaView style={[styles.container, style.container]}>
                <View style={[style.viewLogo]}>
                    <Image style={style.image} source={require('../../assets/logo-red.png')} />
                    <Text>Sell What You Don't Need</Text>
                </View>
                <View style={style.viewBtn}>
                    <View style={[style.rectangle, { backgroundColor: colors.red }]}></View>
                    <View style={[style.rectangle, { backgroundColor: colors.green }]}></View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1
    },
    image: {
        width: 120,
        height: 120
    },
    container: {
        justifyContent: "space-between",
        alignItems: "center"
    },
    rectangle: {
        height: 70,
        width: "100%"
    },
    viewLogo: {
        alignItems: "center",
        top: 40
    },
    viewBtn: {
        width: "100%",
        position: "absolute",
        bottom: 0
    }
});
