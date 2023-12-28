import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './ResistancesContainer.sass';
import Stat from '../../../components/Stat';
import colors from '../../../constantData/colors';
import DefaultText from '../../../components/DefaultText';
import {
    calculate_immunity,
    calculate_robustness,
    calculate_focus,
    calculate_vitality,
} from '../../../constantData/statsEquations';

export default function ResistancesContainer({ data, containerStyle }) {

    const [immunity, setImmunity] = useState('')
    const [robustness, setRobustness] = useState('')
    const [focus, setFocus] = useState('')
    const [vitality, setVitality] = useState('')

    useEffect(() => {
        setImmunity(calculate_immunity(parseInt(data?.level), parseInt(data?.vigor)));
        setRobustness(calculate_robustness(parseInt(data?.level), parseInt(data?.endurance)));
        setFocus(calculate_focus(parseInt(data?.level), parseInt(data?.mind)));
        setVitality(calculate_vitality(parseInt(data?.level), parseInt(data?.arcane)));
    }, [data]);

    return (
        <View style={[containerStyle, style.container]}>
            <View style={style.title}>
                <DefaultText>
                    Resistances
                </DefaultText>
            </View>
            <View style={style.items_container}>
                <Stat
                    value={immunity}
                    text={'Immunity'}
                    color={colors.gold}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={robustness}
                    text={'Robustness'}
                    color={colors.gold}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={focus}
                    text={'Focus'}
                    color={colors.gold}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={vitality}
                    text={'Vitality'}
                    color={colors.gold}
                    textStyle={style.stat_text}
                />
            </View>
        </View>
    );
}