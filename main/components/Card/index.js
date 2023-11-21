import React from 'react';
import { View } from 'react-native';
import styles from './Card.sass';

function Card(props) {
    return (
        <View style={[styles.container,props.style]}>
            {props.children}
        </View>
    );
}

export default Card;