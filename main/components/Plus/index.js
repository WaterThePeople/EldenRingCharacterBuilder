import React from 'react';
import style from './Plus.sass';
import {View} from 'react-native';

export default function Plus() {
  return (
    <View style={style.container}>
      <View style={style.plus_vertical}></View>
      <View style={style.plus_horizontal}></View>
    </View>
  );
}
