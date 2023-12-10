import React from 'react';
import {TextInput} from 'react-native';
import { Dimensions } from 'react-native';

export default function DefaultTextInput({
  style,
  textClip,
  autoFont,
  value,
  onChange,
  placeholder,
  goBackButtonExist,
  buttonSize = 90,
  maxLength = 100,
}) {
  return (
    <>
      <TextInput
        maxLength={maxLength}
        style={[
          {fontFamily: 'GARAM', color: 'white', fontSize: 30},
          style,
          {
            width: goBackButtonExist
              ? Dimensions.get('window').width - buttonSize
              : Dimensions.get('window').width - buttonSize,
          },
        ]}
        theme={{colors: {text: '#fff'}}}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        numberOfLines={1}
        ellipsizeMode={textClip ? 'clip' : 'tail'}
        adjustsFontSizeToFit={autoFont}
        placeholderTextColor="#fff"></TextInput>
    </>
  );
}
