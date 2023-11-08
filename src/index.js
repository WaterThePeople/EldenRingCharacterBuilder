import React from 'react';
import {Text, View} from 'react-native';
import style from './Main.sass';

export default function Main() {
  return (
    <View style={style.container}>
      <Text style={style.item}>Main component - xd</Text>
    </View>
  );
}