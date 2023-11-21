import React from 'react';
import {View} from 'react-native';
import style from './Title.sass';
import DefaultText from '../DefaultText';

export default function Title({name}) {
  return (
    <View style={style.title}>
      <DefaultText style={style.title_text} autoFont={true}>{name}</DefaultText>
    </View>
  );
}
