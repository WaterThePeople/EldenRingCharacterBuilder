import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import style from './Main.sass';

export default function Main() {
  return (
    <View style={style.container}>
      <ImageBackground source={require('../images/background.jpg')} resizeMode="cover" style={style.image}>
      <Text style={style.item}>Inside</Text>
    </ImageBackground>
    </View>
  );
}