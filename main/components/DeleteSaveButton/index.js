import React from 'react';
import style from './DeleteSaveButton.sass';
import {View,Pressable} from 'react-native';

export default function DeleteSaveButton({onDelete}) {
  return (
    <Pressable style={style.container} onPress={onDelete}>
      <View style={style.delete_vertical}></View>
      <View style={style.delete_horizontal}></View>
    </Pressable>
  );
}
