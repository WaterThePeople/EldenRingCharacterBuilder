import React from 'react';
import { View } from 'react-native';
import style from './ClassStatInfo.sass';
import DefaultText from '../DefaultText';

export default function ClassStatInfo({stat, value }) {

    return (
        <View style={style.container}>
            <DefaultText style={style.text}>{stat}</DefaultText>
            <DefaultText style={style.text}>{value}</DefaultText>
        </View>
    );
}