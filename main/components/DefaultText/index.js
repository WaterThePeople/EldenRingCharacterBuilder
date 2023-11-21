import React from 'react';
import {Text} from 'react-native';

export default function DefaultText({children, style, textClip, autoFont, numberOfLines=1}) {
  return (
    <Text
      style={[
        {fontFamily: 'GARAM', color: 'white', fontSize: 30},
        style,
      ]}
      numberOfLines={numberOfLines}
      ellipsizeMode={textClip ? 'clip' : 'tail'}
      adjustsFontSizeToFit = {autoFont}
      >
      {children}
    </Text>
  );
}
