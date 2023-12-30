import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './ResistancesContainer.sass';
import Stat from '../../components/Stat';
import colors from '../../constantData/colors';
import DefaultText from '../../components/DefaultText';
import {
    calculate_immunity,
    calculate_robustness,
    calculate_focus,
    calculate_vitality,
} from '../../constantData/statsEquations';

export default function ResistancesContainer({ data, containerStyle, armorData, talismansData }) {

    const [immunity, setImmunity] = useState('')
    const [robustness, setRobustness] = useState('')
    const [focus, setFocus] = useState('')
    const [vitality, setVitality] = useState('')

    const [bonusImmunity, setBonusImmunity] = useState('')
    const [bonusRobustness, setBonusRobustness] = useState('')
    const [bonusFocus, setBonusFocus] = useState('')
    const [bonusVitality, setBonusVitality] = useState('')

    useEffect(() => {
        setImmunity
            (
                calculate_immunity
                    (parseInt
                        (data?.level),
                        (
                            parseInt(data?.vigor)
                            +
                            parseInt(talismansData?.slot1?.bonus_vigor ? talismansData?.slot1?.bonus_vigor : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_vigor ? talismansData?.slot2?.bonus_vigor : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_vigor ? talismansData?.slot3?.bonus_vigor : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_vigor ? talismansData?.slot4?.bonus_vigor : '0')
                        )
                    )
            );
        setRobustness
            (
                calculate_robustness
                    (parseInt
                        (data?.level),
                        (
                            parseInt(data?.endurance)
                            +
                            parseInt(talismansData?.slot1?.bonus_endurance ? talismansData?.slot1?.bonus_endurance : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_endurance ? talismansData?.slot2?.bonus_endurance : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_endurance ? talismansData?.slot3?.bonus_endurance : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_endurance ? talismansData?.slot4?.bonus_endurance : '0')
                        )
                    )
            );
        setFocus
            (
                calculate_focus
                    (parseInt
                        (data?.level),
                        (
                            parseInt(data?.mind)
                            +
                            parseInt(talismansData?.slot1?.bonus_mind ? talismansData?.slot1?.bonus_mind : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_mind ? talismansData?.slot2?.bonus_mind : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_mind ? talismansData?.slot3?.bonus_mind : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_mind ? talismansData?.slot4?.bonus_mind : '0')
                        )
                    )
            );
        setVitality
            (
                calculate_vitality
                    (parseInt
                        (data?.level),
                        (
                            parseInt(data?.arcane)
                            +
                            parseInt(talismansData?.slot1?.bonus_arcane ? talismansData?.slot1?.bonus_arcane : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_arcane ? talismansData?.slot2?.bonus_arcane : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_arcane ? talismansData?.slot3?.bonus_arcane : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_arcane ? talismansData?.slot4?.bonus_arcane : '0')
                        )
                    )
            );

    }, [data, talismansData]);

    useEffect(() => {
        setBonusImmunity
            (
                (
                    parseInt(armorData?.Armor?.immunity ? armorData?.Armor?.immunity : '0')
                    +
                    parseInt(armorData?.Gauntlets?.immunity ? armorData?.Gauntlets?.immunity : '0')
                    +
                    parseInt(armorData?.Greaves?.immunity ? armorData?.Greaves?.immunity : '0')
                    +
                    parseInt(armorData?.Helmet?.immunity ? armorData?.Helmet?.immunity : '0')
                    +
                    parseInt(talismansData?.slot1?.bonus_immunity ? talismansData?.slot1?.bonus_immunity : '0')
                    +
                    parseInt(talismansData?.slot2?.bonus_immunity ? talismansData?.slot2?.bonus_immunity : '0')
                    +
                    parseInt(talismansData?.slot3?.bonus_immunity ? talismansData?.slot3?.bonus_immunity : '0')
                    +
                    parseInt(talismansData?.slot4?.bonus_immunity ? talismansData?.slot4?.bonus_immunity : '0')
                )
            )
        setBonusRobustness
            (
                (
                    parseInt(armorData?.Armor?.robustness ? armorData?.Armor?.robustness : '0')
                    +
                    parseInt(armorData?.Gauntlets?.robustness ? armorData?.Gauntlets?.robustness : '0')
                    +
                    parseInt(armorData?.Greaves?.robustness ? armorData?.Greaves?.robustness : '0')
                    +
                    parseInt(armorData?.Helmet?.robustness ? armorData?.Helmet?.robustness : '0')
                    +
                    parseInt(talismansData?.slot1?.bonus_robustness ? talismansData?.slot1?.bonus_robustness : '0')
                    +
                    parseInt(talismansData?.slot2?.bonus_robustness ? talismansData?.slot2?.bonus_robustness : '0')
                    +
                    parseInt(talismansData?.slot3?.bonus_robustness ? talismansData?.slot3?.bonus_robustness : '0')
                    +
                    parseInt(talismansData?.slot4?.bonus_robustness ? talismansData?.slot4?.bonus_robustness : '0')
                )
            )
        setBonusFocus
            (
                (
                    parseInt(armorData?.Armor?.focus ? armorData?.Armor?.focus : '0')
                    +
                    parseInt(armorData?.Gauntlets?.focus ? armorData?.Gauntlets?.focus : '0')
                    +
                    parseInt(armorData?.Greaves?.focus ? armorData?.Greaves?.focus : '0')
                    +
                    parseInt(armorData?.Helmet?.focus ? armorData?.Helmet?.focus : '0')
                    +
                    parseInt(talismansData?.slot1?.bonus_focus ? talismansData?.slot1?.bonus_focus : '0')
                    +
                    parseInt(talismansData?.slot2?.bonus_focus ? talismansData?.slot2?.bonus_focus : '0')
                    +
                    parseInt(talismansData?.slot3?.bonus_focus ? talismansData?.slot3?.bonus_focus : '0')
                    +
                    parseInt(talismansData?.slot4?.bonus_focus ? talismansData?.slot4?.bonus_focus : '0')
                )
            )
        setBonusVitality
            (
                (
                    parseInt(armorData?.Armor?.vitality ? armorData?.Armor?.vitality : '0')
                    +
                    parseInt(armorData?.Gauntlets?.vitality ? armorData?.Gauntlets?.vitality : '0')
                    +
                    parseInt(armorData?.Greaves?.vitality ? armorData?.Greaves?.vitality : '0')
                    +
                    parseInt(armorData?.Helmet?.vitality ? armorData?.Helmet?.vitality : '0')
                    +
                    parseInt(talismansData?.slot1?.bonus_vitality ? talismansData?.slot1?.bonus_vitality : '0')
                    +
                    parseInt(talismansData?.slot2?.bonus_vitality ? talismansData?.slot2?.bonus_vitality : '0')
                    +
                    parseInt(talismansData?.slot3?.bonus_vitality ? talismansData?.slot3?.bonus_vitality : '0')
                    +
                    parseInt(talismansData?.slot4?.bonus_vitality ? talismansData?.slot4?.bonus_vitality : '0')
                )
            )
    }, [armorData]);

    return (
        <View style={[containerStyle, style.container]}>
            <View style={style.title}>
                <DefaultText>
                    Resistances
                </DefaultText>
            </View>
            <View style={style.items_container}>
                <Stat
                    value={(immunity + bonusImmunity)}
                    text={'Immunity'}
                    color={colors.gold}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={robustness + bonusRobustness}
                    text={'Robustness'}
                    color={colors.gold}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={focus + bonusFocus}
                    text={'Focus'}
                    color={colors.gold}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={vitality + bonusVitality}
                    text={'Vitality'}
                    color={colors.gold}
                    textStyle={style.stat_text}
                />
            </View>
        </View>
    );
}