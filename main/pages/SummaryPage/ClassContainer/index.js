import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import style from './ClassContainer.sass';
import Stat from '../../../components/Stat';
import colors from '../../../constantData/colors';
import DefaultText from '../../../components/DefaultText';

export default function ClassContainer({ statsData, containerStyle, talismansData }) {
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
                    value=
                    {
                        (
                            parseInt(statsData?.vigor)
                            +
                            parseInt(talismansData?.slot1?.bonus_vigor ? talismansData?.slot1?.bonus_vigor : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_vigor ? talismansData?.slot2?.bonus_vigor : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_vigor ? talismansData?.slot3?.bonus_vigor : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_vigor ? talismansData?.slot4?.bonus_vigor : '0')
                        )
                    }
                    text={'Vigor'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value=
                    {
                        (
                            parseInt(statsData?.mind)
                            +
                            parseInt(talismansData?.slot1?.bonus_mind ? talismansData?.slot1?.bonus_mind : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_mind ? talismansData?.slot2?.bonus_mind : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_mind ? talismansData?.slot3?.bonus_mind : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_mind ? talismansData?.slot4?.bonus_mind : '0')
                        )
                    }
                    text={'Mind'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value=
                    {
                        (
                            parseInt(statsData?.endurance)
                            +
                            parseInt(talismansData?.slot1?.bonus_endurance ? talismansData?.slot1?.bonus_endurance : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_endurance ? talismansData?.slot2?.bonus_endurance : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_endurance ? talismansData?.slot3?.bonus_endurance : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_endurance ? talismansData?.slot4?.bonus_endurance : '0')
                        )
                    }
                    text={'Endurance'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value=
                    {
                        (
                            parseInt(statsData?.strength)
                            +
                            parseInt(talismansData?.slot1?.bonus_str ? talismansData?.slot1?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_str ? talismansData?.slot2?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_str ? talismansData?.slot3?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_str ? talismansData?.slot4?.bonus_str : '0')
                        )
                    }
                    text={'Strength'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value=
                    {
                        (
                            parseInt(statsData?.dexterity)
                            +
                            parseInt(talismansData?.slot1?.bonus_dex ? talismansData?.slot1?.bonus_dex : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_dex ? talismansData?.slot2?.bonus_dex : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_dex ? talismansData?.slot3?.bonus_dex : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_dex ? talismansData?.slot4?.bonus_dex : '0')
                        )
                    }
                    text={'Dexterity'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value=
                    {
                        (
                            parseInt(statsData?.faith)
                            +
                            parseInt(talismansData?.slot1?.bonus_fth ? talismansData?.slot1?.bonus_fth : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_fth ? talismansData?.slot2?.bonus_fth : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_fth ? talismansData?.slot3?.bonus_fth : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_fth ? talismansData?.slot4?.bonus_fth : '0')
                        )
                    }
                    text={'Faith'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value=
                    {
                        (
                            parseInt(statsData?.intelligence)
                            +
                            parseInt(talismansData?.slot1?.bonus_int ? talismansData?.slot1?.bonus_int : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_int ? talismansData?.slot2?.bonus_int : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_int ? talismansData?.slot3?.bonus_int : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_int ? talismansData?.slot4?.bonus_int : '0')
                        )
                    }
                    text={'Intelligence'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value=
                    {
                        (
                            parseInt(statsData?.arcane)
                            +
                            parseInt(talismansData?.slot1?.bonus_arc ? talismansData?.slot1?.bonus_arc : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_arc ? talismansData?.slot2?.bonus_arc : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_arc ? talismansData?.slot3?.bonus_arc : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_arc ? talismansData?.slot4?.bonus_arc : '0')
                        )
                    }
                    text={'Arcane'}
                    textStyle={style.stat_text}
                />
            </View>
        </View>
    );
}