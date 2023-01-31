import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Platform, StatusBar } from 'react-native';

export default function Test() {
  return (
    <SafeAreaView style={[styles.container, styles.white]}>
      <Text onPress={() => alert('salam')}>Open up App.js to start working on your app!</Text>
      <Image source={require('./assets/favicon.png')} />
      <TouchableOpacity onPress={() => alert('m3ak moundir')}>
        <Image source={{ uri: "https://intranet.youcode.ma/storage/users/profile/88-1664981765.jpg", width: 200, height: 200 }} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  white: {
    backgroundColor: "white"
  }
});
