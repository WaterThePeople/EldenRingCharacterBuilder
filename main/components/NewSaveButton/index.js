import React from 'react';
import {Pressable} from 'react-native';
import style from './NewSaveButton.sass'
import DefaultText from '../DefaultText';
import Plus from '../Plus';

export default function NewSaveButton({className, onClick, label, plusIcon}) {
  return (
        <Pressable 
        style={[className, style.button]}
        onPress={onClick}
        >
            {plusIcon && 
            (
                <Plus/>
            )}
            <DefaultText style={style.label}>{label}</DefaultText>
        </Pressable>
  );
}