import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './DefencesContainer.sass';
import Stat from '../../../components/Stat';
import colors from '../../../constantData/colors';
import DefaultText from '../../../components/DefaultText';
import {
    calculate_physical_defense,
    calculate_magical_defense,
    calculate_fire_defense,
    calculate_lightning_defense,
    calculate_holy_defense,
} from '../../../constantData/statsEquations';

export default function DefencesContainer({ data, containerStyle }) {

    const [physicalDefense, setPhysicalDefense] = useState('')
    const [strikeDefense, setStrikeDefense] = useState('')
    const [slashDefense, setSlashDefense] = useState('')
    const [pierceDefense, setPierceDefense] = useState('')
    const [magicalDefense, setMagicalDefense] = useState('')
    const [fireDefense, setFireDefense] = useState('')
    const [lightningDefense, setLightningDefense] = useState('')
    const [holyDefense, setHolyDefense] = useState('')

    useEffect(() => {
        setPhysicalDefense(calculate_physical_defense(parseInt(data?.level), parseInt(data?.strength)));
        setStrikeDefense(calculate_physical_defense(parseInt(data?.level), parseInt(data?.strength)));
        setSlashDefense(calculate_physical_defense(parseInt(data?.level), parseInt(data?.strength)));
        setPierceDefense(calculate_physical_defense(parseInt(data?.level), parseInt(data?.strength)));
        setMagicalDefense(calculate_magical_defense(parseInt(data?.level), parseInt(data?.intelligence)));
        setFireDefense(calculate_fire_defense(parseInt(data?.level), parseInt(data?.vigor)));
        setLightningDefense(calculate_lightning_defense(parseInt(data?.level)));
        setHolyDefense(calculate_holy_defense(parseInt(data?.level), parseInt(data?.arcane)));
    }, [data]);

    return (
        <View style={[containerStyle, style.container]}>
            <View style={style.title}>
                <DefaultText>
                    Defences
                </DefaultText>
            </View>
            <View style={style.items_container}>
                <Stat
                    value={physicalDefense}
                    text={'Physical'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={strikeDefense}
                    text={'vs Strike'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={slashDefense}
                    text={'vs Slash'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={pierceDefense}
                    text={'vs Pierce'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={magicalDefense}
                    text={'Magical'}
                    color={colors.light_blue}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={fireDefense}
                    text={'Fire'}
                    color={colors.orange}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={lightningDefense}
                    text={'Lightning'}
                    color={colors.yellow}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={holyDefense}
                    text={'Holy'}
                    color={colors.light_yellow}
                    textStyle={style.stat_text}
                />
            </View>
        </View>
    );
}