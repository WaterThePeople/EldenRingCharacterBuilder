import React from 'react';
import style from './DeleteItemButton.sass';
import {View,Pressable} from 'react-native';

export default function DeleteItemButton({onDelete}) {
  return (
    <Pressable style={style.container} onPress={onDelete}>
      <View style={style.delete_vertical}></View>
      <View style={style.delete_horizontal}></View>
    </Pressable>
  );
}
