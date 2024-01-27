import * as React from 'react';
import { StyleSheet, Text, ImageBackground, View, StatusBar, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#043E38', '#B4DCB8']}
        style={styles.background}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <ImageBackground
          source={require('./src/assets/images/background.png')}
          style={styles.backgroundImage}
          resizeMode="contain"
        >








        </ImageBackground>










      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
    paddingBottom: 10,
  },
  backgroundImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: "100%",
    margin: 10,
  },
  logo: {

  },

  overlayContent: {

  },
  text: {

  },

});
