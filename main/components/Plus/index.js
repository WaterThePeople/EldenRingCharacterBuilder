import React from 'react';
import style from './Plus.sass';
import {View} from 'react-native';

export default function Plus({noBackground}) {
  return (
    <View style={noBackground ? style.container_no_background : style.container}>
      <View style={style.plus_vertical}></View>
      <View style={style.plus_horizontal}></View>
    </View>
  );
}
