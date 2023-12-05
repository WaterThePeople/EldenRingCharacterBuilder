import React from 'react';
import {View} from 'react-native';
import style from './Title.sass';
import DefaultText from '../DefaultText';
import { Dimensions } from 'react-native';

export default function Title({name, goBackButtonExist, textAlignLeft}) {
  return (
    <View style={[style.title,
    {width: goBackButtonExist ?  Dimensions.get('window').width - 90 : Dimensions.get('window').width-40}]}>
      <DefaultText style={[style.title_text, textAlignLeft ? style.text_left : style.text_center]} autoFont={true}>{name}</DefaultText>
    </View>
  );
}
