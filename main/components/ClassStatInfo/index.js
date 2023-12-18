import React from 'react';
import { View } from 'react-native';
import style from './ClassStatInfo.sass';
import DefaultText from '../DefaultText';
import { Pressable } from 'react-native';
import Plus from '../Plus';
import Minus from '../Minus';

export default function ClassStatInfo({ stat, value, totalValue, onPlus, onMinus }) {

    return (
        <View style={style.container}>
            <DefaultText style={style.text} autoFont={true}>{stat}</DefaultText>
            <DefaultText style={style.text_initial} autoFont={true}>{value}</DefaultText>
            <View style={style.total_container}>
                {onMinus && (
                    <Pressable onPress={onMinus}>
                        <Minus noBackground />
                    </Pressable>
                )}
                <DefaultText style={style.text_total} autoFont={true}>{totalValue}</DefaultText>
                {onPlus && (
                    <Pressable onPress={onPlus}>
                        <Plus noBackground />
                    </Pressable>
                )}
            </View>
        </View>
    );
}