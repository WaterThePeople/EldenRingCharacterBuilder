import React from 'react';
import style from './Stat.sass';
import {View} from 'react-native';
import DefaultText from '../DefaultText';

export default function Stat({containerStyle, textStyle, text, value, color}) {
  return (
  <View style={[style.container, containerStyle]}>
        <DefaultText style={textStyle} color={color}>{text}</DefaultText>
        <DefaultText style={textStyle} >{value}</DefaultText>
  </View>);
}
