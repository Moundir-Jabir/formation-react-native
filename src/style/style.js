import { StyleSheet, Platform, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})

export const colors = {
    red: "#fc5c65",
    green: "#4ECDC4"
}