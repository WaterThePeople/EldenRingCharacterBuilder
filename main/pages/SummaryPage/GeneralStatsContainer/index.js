import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './GeneralStatsContainer.sass';
import Stat from '../../../components/Stat';
import colors from '../../../constantData/colors';
import DefaultText from '../../../components/DefaultText';
import {
    calculate_hp,
    calculate_fp,
    calculate_stamina,
    calculate_equip_load,
    calculate_discovery,
} from '../../../constantData/statsEquations';

export default function GeneralStatsContainer({ data, containerStyle }) {

    const [HP, setHP] = useState('');
    const [FP, setFP] = useState('');
    const [stamina, setStamina] = useState('');
    const [equipLoad, setEquipLoad] = useState('');
    const [poise, setPoise] = useState('0')
    const [discovery, setDiscovery] = useState('');

    useEffect(() => {
        setHP(calculate_hp(parseInt(data?.vigor)));
        setFP(calculate_fp(parseInt(data?.mind)));
        setStamina(calculate_stamina(parseInt(data?.endurance)));
        setEquipLoad(calculate_equip_load(parseInt(data?.endurance)));
        setDiscovery(calculate_discovery(parseInt(data?.arcane)));
    }, [data]);

    return (
        <View style={[containerStyle, style.container]}>
            <View style={style.title}>
                <DefaultText>
                    General
                </DefaultText>
            </View>
            <View style={[style.items_container, { flex: 1 }]}>
                <Stat
                    value={HP}
                    text={'HP'}
                    color={colors.red}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={FP}
                    text={'FP'}
                    color={colors.blue}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={stamina}
                    text={'Stamina'}
                    color={colors.green}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={poise}
                    text={'Poise'}
                    color={colors.silver}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={discovery}
                    text={'Discovery'}
                    color={colors.light_pink}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={equipLoad}
                    text={'Equip load'}
                    color={colors.light_brown}
                    textStyle={style.stat_text}
                />
            </View>
        </View>
    );
}