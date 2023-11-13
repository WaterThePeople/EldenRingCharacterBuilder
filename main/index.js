import React from 'react';
import {ImageBackground, View} from 'react-native';
import style from './Main.sass';
import Navigation from './navigation';

function Main() {
  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      resizeMode="cover"
      style={style.background}>
        <View style={style.container}>
          <Navigation/>
        </View>
    </ImageBackground>
  );
}

export default Main;
