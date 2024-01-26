import * as React from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#043E38', '#B4DCB8']}
        style={styles.background}
      >
        <ImageBackground
          source={require('./src/assets/backtop.svg')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.overlayContent}>
            <Text style={styles.text}>Texto sobre a imagem</Text>
            {/* Adicione mais componentes aqui conforme necessário */}
          </View>

        </ImageBackground>










      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {

  },
  backgroundImage: {
   

  },
  overlayContent: {

  },
  text: {
    
  },
});
