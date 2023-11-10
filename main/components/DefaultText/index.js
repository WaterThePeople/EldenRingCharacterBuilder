import React from 'react';
import {Text} from 'react-native';

export default function DefaultText({children,style}) {
  return (
    <Text 
    style={[{fontFamily: 'Mantinia-Regular', color:'white', fontSize: 30}, style]} 
    >
      {children}
      </Text>
  );
}