import React from 'react';
import {Text} from 'react-native';

export default function DefaultText({children, style, textClip, autoFont}) {
  return (
    <Text
      style={[
        {fontFamily: 'GARAM', color: 'white', fontSize: 30},
        style,
      ]}
      numberOfLines={1}
      ellipsizeMode={textClip ? 'clip' : 'tail'}
      adjustsFontSizeToFit = {autoFont}
      >
      {children}
    </Text>
  );
}
