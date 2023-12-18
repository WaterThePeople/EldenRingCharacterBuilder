import React from 'react';
import style from './Minus.sass';
import {View} from 'react-native';

export default function Minus({noBackground}) {
  return (
    <View style={noBackground ? style.container_no_background : style.container}>
      <View style={style.minus_horizontal}></View>
    </View>
  );
}
