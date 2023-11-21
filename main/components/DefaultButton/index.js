import React from 'react';
import {Pressable} from 'react-native';
import style from './DefaultButton.sass'
import DefaultText from '../DefaultText';

export default function DefaultButton({styles, onClick, label}) {
  return (
        <Pressable 
        style={[style.button, styles]}
        onPress={onClick}
        >
            <DefaultText style={style.label} numberOfLines={2} autoFont >{label}</DefaultText>
        </Pressable>
  );
}