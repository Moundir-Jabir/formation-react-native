import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { styles, colors } from '../style/style'

export default function WelcomeScreen() {
    return (
        <SafeAreaView style={[styles.container, style.container]}>
            <View style={style.viewBox}>
                <View style={[{ backgroundColor: colors.red }, style.box]}></View>
                <View style={[{ backgroundColor: colors.green }, style.box]}></View>
            </View>
            <Image source={require('../../assets/chair.jpg')} style={style.image} />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    box: {
        width: 50,
        height: 50
    },
    viewBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        bottom: 70
    },
    container: {
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: "100%",
        height: 600,
    }
});
