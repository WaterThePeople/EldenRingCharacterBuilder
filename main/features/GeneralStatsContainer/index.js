import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './GeneralStatsContainer.sass';
import Stat from '../../components/Stat';
import colors from '../../constantData/colors';
import DefaultText from '../../components/DefaultText';
import {
    calculate_hp,
    calculate_fp,
    calculate_stamina,
    calculate_equip_load,
    calculate_discovery,
} from '../../constantData/statsEquations';

export default function GeneralStatsContainer({ data, containerStyle, talismansData, weaponsData, armorData }) {

    const [HP, setHP] = useState('');
    const [FP, setFP] = useState('');
    const [stamina, setStamina] = useState('');
    const [equipLoad, setEquipLoad] = useState('');
    const [poise, setPoise] = useState('0')
    const [discovery, setDiscovery] = useState('');

    const [finalHP, setFinalHP] = useState('');
    const [finalFP, setFinalFP] = useState('');
    const [finalStamina, setFinalStamina] = useState('');
    const [finalEquipLoad, setFinalEquipLoad] = useState('');
    const [finalPoise, setFinalPoise] = useState('0')
    const [finalDiscovery, setFinalDiscovery] = useState('');

    const [currentLoad, setCurrentLoad] = useState('0')
    const [rollType, setRollType] = useState('0')

    useEffect(() => {
        setHP(calculate_hp((
            parseInt(data?.vigor)
            +
            parseInt(talismansData?.slot1?.bonus_vigor ? talismansData?.slot1?.bonus_vigor : '0')
            +
            parseInt(talismansData?.slot2?.bonus_vigor ? talismansData?.slot2?.bonus_vigor : '0')
            +
            parseInt(talismansData?.slot3?.bonus_vigor ? talismansData?.slot3?.bonus_vigor : '0')
            +
            parseInt(talismansData?.slot4?.bonus_vigor ? talismansData?.slot4?.bonus_vigor : '0')
        )));
        setFP(calculate_fp(parseInt(
            parseInt(data?.mind)
            +
            parseInt(talismansData?.slot1?.bonus_mind ? talismansData?.slot1?.bonus_mind : '0')
            +
            parseInt(talismansData?.slot2?.bonus_mind ? talismansData?.slot2?.bonus_mind : '0')
            +
            parseInt(talismansData?.slot3?.bonus_mind ? talismansData?.slot3?.bonus_mind : '0')
            +
            parseInt(talismansData?.slot4?.bonus_mind ? talismansData?.slot4?.bonus_mind : '0')
        )));
        setStamina(calculate_stamina(parseInt(
            parseInt(data?.endurance)
            +
            parseInt(talismansData?.slot1?.bonus_endurance ? talismansData?.slot1?.bonus_endurance : '0')
            +
            parseInt(talismansData?.slot2?.bonus_endurance ? talismansData?.slot2?.bonus_endurance : '0')
            +
            parseInt(talismansData?.slot3?.bonus_endurance ? talismansData?.slot3?.bonus_endurance : '0')
            +
            parseInt(talismansData?.slot4?.bonus_endurance ? talismansData?.slot4?.bonus_endurance : '0')
        )));
        setEquipLoad(calculate_equip_load(parseInt(
            parseInt(data?.endurance)
            +
            parseInt(talismansData?.slot1?.bonus_endurance ? talismansData?.slot1?.bonus_endurance : '0')
            +
            parseInt(talismansData?.slot2?.bonus_endurance ? talismansData?.slot2?.bonus_endurance : '0')
            +
            parseInt(talismansData?.slot3?.bonus_endurance ? talismansData?.slot3?.bonus_endurance : '0')
            +
            parseInt(talismansData?.slot4?.bonus_endurance ? talismansData?.slot4?.bonus_endurance : '0')
        )));
        setDiscovery(calculate_discovery(parseInt(
            parseInt(data?.arcane)
            +
            parseInt(talismansData?.slot1?.bonus_arc ? talismansData?.slot1?.bonus_arc : '0')
            +
            parseInt(talismansData?.slot2?.bonus_arc ? talismansData?.slot2?.bonus_arc : '0')
            +
            parseInt(talismansData?.slot3?.bonus_arc ? talismansData?.slot3?.bonus_arc : '0')
            +
            parseInt(talismansData?.slot4?.bonus_arc ? talismansData?.slot4?.bonus_arc : '0')
        )));
    }, [data, talismansData]);

    useEffect(() => {
        setFinalHP(Math.floor(
            parseInt(HP)
            *
            parseFloat(talismansData?.slot1?.bonus_hp ? (1 + parseFloat(parseInt(talismansData?.slot1?.bonus_hp) / 100)) : '1')
            *
            parseFloat(talismansData?.slot2?.bonus_hp ? (1 + parseFloat(parseInt(talismansData?.slot2?.bonus_hp) / 100)) : '1')
            *
            parseFloat(talismansData?.slot3?.bonus_hp ? (1 + parseFloat(parseInt(talismansData?.slot3?.bonus_hp) / 100)) : '1')
            *
            parseFloat(talismansData?.slot4?.bonus_hp ? (1 + parseFloat(parseInt(talismansData?.slot4?.bonus_hp) / 100)) : '1')
        ))
    }, [HP]);

    useEffect(() => {
        setFinalFP(Math.floor(
            parseInt(FP)
            *
            parseFloat(talismansData?.slot1?.bonus_fp ? (1 + parseFloat(parseInt(talismansData?.slot1?.bonus_fp) / 100)) : '1')
            *
            parseFloat(talismansData?.slot2?.bonus_fp ? (1 + parseFloat(parseInt(talismansData?.slot2?.bonus_fp) / 100)) : '1')
            *
            parseFloat(talismansData?.slot3?.bonus_fp ? (1 + parseFloat(parseInt(talismansData?.slot3?.bonus_fp) / 100)) : '1')
            *
            parseFloat(talismansData?.slot4?.bonus_fp ? (1 + parseFloat(parseInt(talismansData?.slot4?.bonus_fp) / 100)) : '1')
        ))
    }, [FP]);

    useEffect(() => {
        setFinalStamina(Math.floor(
            parseInt(stamina)
            *
            parseFloat(talismansData?.slot1?.bonus_stamina ? (1 + parseFloat(parseInt(talismansData?.slot1?.bonus_stamina) / 100)) : '1')
            *
            parseFloat(talismansData?.slot2?.bonus_stamina ? (1 + parseFloat(parseInt(talismansData?.slot2?.bonus_stamina) / 100)) : '1')
            *
            parseFloat(talismansData?.slot3?.bonus_stamina ? (1 + parseFloat(parseInt(talismansData?.slot3?.bonus_stamina) / 100)) : '1')
            *
            parseFloat(talismansData?.slot4?.bonus_stamina ? (1 + parseFloat(parseInt(talismansData?.slot4?.bonus_stamina) / 100)) : '1')
        ))
    }, [stamina]);

    useEffect(() => {
        setFinalEquipLoad(Math.floor(
            (parseFloat(equipLoad)
                *
                parseFloat(talismansData?.slot1?.bonus_eq_load ? (1 + parseFloat(parseInt(talismansData?.slot1?.bonus_eq_load) / 100)) : '1')
                *
                parseFloat(talismansData?.slot2?.bonus_eq_load ? (1 + parseFloat(parseInt(talismansData?.slot2?.bonus_eq_load) / 100)) : '1')
                *
                parseFloat(talismansData?.slot3?.bonus_eq_load ? (1 + parseFloat(parseInt(talismansData?.slot3?.bonus_eq_load) / 100)) : '1')
                *
                parseFloat(talismansData?.slot4?.bonus_eq_load ? (1 + parseFloat(parseInt(talismansData?.slot4?.bonus_eq_load) / 100)) : '1')) * 10
        ) / 10)
    }, [equipLoad]);

    useEffect(() => {
        setPoise
            (
                parseInt(armorData?.Armor?.poise ? armorData?.Armor?.poise : '0')
                +
                parseInt(armorData?.Gauntlets?.poise ? armorData?.Gauntlets?.poise : '0')
                +
                parseInt(armorData?.Greaves?.poise ? armorData?.Greaves?.poise : '0')
                +
                parseInt(armorData?.Helmet?.poise ? armorData?.Helmet?.poise : '0')
            )
    }, [armorData]);

    useEffect(() => {
        setFinalPoise(Math.floor(
            parseInt(poise)
            *
            parseFloat(talismansData?.slot1?.bonus_poise ? (1 + parseFloat(parseInt(talismansData?.slot1?.bonus_poise) / 100)) : '1')
            *
            parseFloat(talismansData?.slot2?.bonus_poise ? (1 + parseFloat(parseInt(talismansData?.slot2?.bonus_poise) / 100)) : '1')
            *
            parseFloat(talismansData?.slot3?.bonus_poise ? (1 + parseFloat(parseInt(talismansData?.slot3?.bonus_poise) / 100)) : '1')
            *
            parseFloat(talismansData?.slot4?.bonus_poise ? (1 + parseFloat(parseInt(talismansData?.slot4?.bonus_poise) / 100)) : '1')
        ))
    }, [poise]);

    useEffect(() => {
        let tempArmor =
            (
                parseFloat(armorData?.Armor?.wgt ? armorData?.Armor?.wgt : '0')
                +
                parseFloat(armorData?.Gauntlets?.wgt ? armorData?.Gauntlets?.wgt : '0')
                +
                parseFloat(armorData?.Greaves?.wgt ? armorData?.Greaves?.wgt : '0')
                +
                parseFloat(armorData?.Helmet?.wgt ? armorData?.Helmet?.wgt : '0')
            )
            * 10
            / 10

        let tempWeapons =
            (
                parseFloat(weaponsData?.weapon_r1?.weapon_weight ? weaponsData?.weapon_r1?.weapon_weight : '0')
                +
                parseFloat(weaponsData?.weapon_r2?.weapon_weight ? weaponsData?.weapon_r2?.weapon_weight : '0')
                +
                parseFloat(weaponsData?.weapon_r3?.weapon_weight ? weaponsData?.weapon_r3?.weapon_weight : '0')
                +
                parseFloat(weaponsData?.weapon_l1?.weapon_weight ? weaponsData?.weapon_l1?.weapon_weight : '0')
                +
                parseFloat(weaponsData?.weapon_l2?.weapon_weight ? weaponsData?.weapon_l2?.weapon_weight : '0')
                +
                parseFloat(weaponsData?.weapon_l3?.weapon_weight ? weaponsData?.weapon_l3?.weapon_weight : '0')
            )
            * 10
            / 10

        let tempTalismans =
            (
                parseInt(talismansData?.slot1?.talisman_wgt ? parseInt(talismansData?.slot1?.talisman_wgt) : '0')
                +
                parseInt(talismansData?.slot2?.talisman_wgt ? parseInt(talismansData?.slot2?.talisman_wgt) : '0')
                +
                parseInt(talismansData?.slot3?.talisman_wgt ? parseInt(talismansData?.slot3?.talisman_wgt) : '0')
                +
                parseInt(talismansData?.slot4?.talisman_wgt ? parseInt(talismansData?.slot4?.talisman_wgt) : '0')
            )
            * 10
            / 10

        setCurrentLoad
            (
                tempArmor + tempWeapons + tempTalismans
            )
    }, [armorData, weaponsData, talismansData]);

    useEffect(() => {
        let temp = Math.floor((currentLoad / finalEquipLoad) * 100)

        if (temp < 30) {
            setRollType('Light roll')
        }
        else if (temp > 30 && temp < 70) {
            setRollType('Medium roll')
        }
        else if (temp > 70 && temp < 100) {
            setRollType('Heavy roll')
        }
        else if (temp > 100) {
            setRollType('Overloaded')
        }
    }, [currentLoad, finalEquipLoad]);

    return (
        <View style={[containerStyle, style.container]}>
            <View style={style.title}>
                <DefaultText>
                    General
                </DefaultText>
            </View>
            <View style={[style.items_container, { flex: 1 }]}>
                <Stat
                    value={finalHP}
                    text={'HP'}
                    color={colors.red}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={finalFP}
                    text={'FP'}
                    color={colors.blue}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={finalStamina}
                    text={'Stamina'}
                    color={colors.green}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={finalPoise}
                    text={'Poise'}
                    color={colors.silver}
                    textStyle={style.stat_text}
                />
                <Stat
                    value=
                    {
                        (
                            parseInt(discovery)
                            +
                            parseInt(talismansData?.slot1?.bonus_discovery ? parseInt(talismansData?.slot1?.bonus_discovery) : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_discovery ? parseInt(talismansData?.slot2?.bonus_discovery) : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_discovery ? parseInt(talismansData?.slot3?.bonus_discovery) : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_discovery ? parseInt(talismansData?.slot4?.bonus_discovery) : '0')
                        )
                    }
                    text={'Discovery'}
                    color={colors.light_pink}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={currentLoad + '/' + finalEquipLoad}
                    text={'Eq. load'}
                    color={colors.light_brown}
                    textStyle={style.stat_text_load}
                />
                <Stat
                    value={Math.floor((currentLoad / finalEquipLoad) * 100) + '%'}
                    text={rollType}
                    textStyle={style.stat_text_load}
                />
            </View>
        </View>
    );
}