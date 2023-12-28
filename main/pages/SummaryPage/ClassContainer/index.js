import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import style from './ClassContainer.sass';
import Stat from '../../../components/Stat';
import colors from '../../../constantData/colors';
import DefaultText from '../../../components/DefaultText';

export default function ClassContainer({ statsData, containerStyle }) {

    return (
        <View style={[containerStyle, style.container]}>
            <View style={style.title}>
                <DefaultText>
                    Stats
                </DefaultText>
            </View>
            <View style={style.items_container}>
                <Stat
                    value={statsData?.level}
                    text={'Level'}
                    color={colors.gold}
                    textStyle={style.stat_text_level}
                />
                <Stat
                    value={statsData?.vigor}
                    text={'Vigor'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={statsData?.mind}
                    text={'Mind'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={statsData?.endurance}
                    text={'Endurance'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={statsData?.strength}
                    text={'Strength'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={statsData?.dexterity}
                    text={'Dexterity'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={statsData?.faith}
                    text={'Faith'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={statsData?.intelligence}
                    text={'Intelligence'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={statsData?.arcane}
                    text={'Arcane'}
                    textStyle={style.stat_text}
                />
            </View>
        </View>
    );
}