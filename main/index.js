import React from 'react';
import {ImageBackground,View} from 'react-native';
import style from './Main.sass';
import SaveSelectionPage from './pages/SaveSelectionPage';

export default function Main() {
  return (
    <ImageBackground source={require('../images/background.jpg')} resizeMode="cover" style={style.background}>
      <View style={style.container}>
        <SaveSelectionPage/>
      </View>
    </ImageBackground>
  );
}