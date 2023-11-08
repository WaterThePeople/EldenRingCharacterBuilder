import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import style from './Main.sass';

export default function Main() {
  return (
    <ImageBackground source={require('../images/background.jpg')} resizeMode="cover" style={style.image}>
    <View style={style.container}>
      <View style={style.title}>
          {/* <Text style={[style.title_text,{includeFontPadding: false}]}>Account name |</Text> */}
          <Text style={{fontFamily: 'Times New Roman', color: 'white', fontSize: 40}}>Czcionka testowanie</Text>
      </View>
    </View>
    </ImageBackground>
  );
}