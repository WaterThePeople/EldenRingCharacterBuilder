import React from 'react';
import {Pressable, StyleSheet, Dimensions} from 'react-native';
import style from './SaveFileButton.sass';
import DefaultText from '../DefaultText';
import DeleteSaveButton from '../DeleteSaveButton';

export default function SaveFileButton({className, onClick, label, onDelete}) {
  return (
    <Pressable
      style={[className, style.button]}
      onPress={onClick}>
      <DefaultText style={[style.label, {width: Dimensions.get('window').width - 130}]} textClip={true}>{label}</DefaultText>
      <DeleteSaveButton onDelete={onDelete} />
    </Pressable>
  );
}
