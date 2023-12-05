import React from 'react';
import { Text } from 'react-native';

export default function DefaultText({ children, style, textClip, autoFont, numberOfLines = 1, color }) {
  return (
    <Text
      style={[
        { fontFamily: 'GARAM', color: (color ? color : 'white'), fontSize: 30 },
        style,
      ]}
      numberOfLines={numberOfLines}
      ellipsizeMode={textClip ? 'clip' : 'tail'}
      adjustsFontSizeToFit={autoFont}
    >
      {children}
    </Text>
  );
}
