import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './GoBackButton.sass';

function GoBackButton({goBackFunction}) {

  return (
    <Pressable
      style={styles.container}
      onPress={() => goBackFunction()}>
      <Image
        style={styles.icon}
        source={require('../../../images/Arrow.png')}
        resizeMode="center"
      />
    </Pressable>
  );
}

export default GoBackButton;
