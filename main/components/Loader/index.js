import React from 'react';
import styles from './Loader.sass';
import { View, ActivityIndicator} from 'react-native';

export default function Loader({ style, size = 100 }) {

    return (
        <View style={[styles.container, style]} >
            <ActivityIndicator size={size} color={'#9B7A03'} />
        </View>
    );
}