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

export default function DefencesContainer({ data, containerStyle, armorData, talismansData }) {

    const [physicalDefense, setPhysicalDefense] = useState('')
    const [strikeDefense, setStrikeDefense] = useState('')
    const [slashDefense, setSlashDefense] = useState('')
    const [pierceDefense, setPierceDefense] = useState('')
    const [magicalDefense, setMagicalDefense] = useState('')
    const [fireDefense, setFireDefense] = useState('')
    const [lightningDefense, setLightningDefense] = useState('')
    const [holyDefense, setHolyDefense] = useState('')

    const [physicalNegation, setPhysicalNegation] = useState('')
    const [strikeNegation, setStrikeNegation] = useState('')
    const [slashNegation, setSlashNegation] = useState('')
    const [pierceNegation, setPierceNegation] = useState('')
    const [magicalNegation, setMagicalNegation] = useState('')
    const [fireNegation, setFireNegation] = useState('')
    const [lightningNegation, setLightningNegation] = useState('')
    const [holyNegation, setHolyNegation] = useState('')

    useEffect(() => {
        setPhysicalDefense
            (
                calculate_physical_defense
                    (parseInt
                        (data?.level),
                        (
                            parseInt(data?.strength)
                            +
                            parseInt(talismansData?.slot1?.bonus_str ? talismansData?.slot1?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_str ? talismansData?.slot2?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_str ? talismansData?.slot3?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_str ? talismansData?.slot4?.bonus_str : '0')
                        )
                    )
            );
        setStrikeDefense
            (
                calculate_physical_defense
                    (parseInt
                        (data?.level),
                        (
                            parseInt(data?.strength)
                            +
                            parseInt(talismansData?.slot1?.bonus_str ? talismansData?.slot1?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_str ? talismansData?.slot2?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_str ? talismansData?.slot3?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_str ? talismansData?.slot4?.bonus_str : '0')
                        )
                    )
            );
        setSlashDefense
            (
                calculate_physical_defense
                    (parseInt
                        (data?.level),
                        (
                            parseInt(data?.strength)
                            +
                            parseInt(talismansData?.slot1?.bonus_str ? talismansData?.slot1?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_str ? talismansData?.slot2?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_str ? talismansData?.slot3?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_str ? talismansData?.slot4?.bonus_str : '0')
                        )
                    )
            );
        setPierceDefense
            (
                calculate_physical_defense
                    (parseInt
                        (data?.level),
                        (
                            parseInt(data?.strength)
                            +
                            parseInt(talismansData?.slot1?.bonus_str ? talismansData?.slot1?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_str ? talismansData?.slot2?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_str ? talismansData?.slot3?.bonus_str : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_str ? talismansData?.slot4?.bonus_str : '0')
                        )
                    )
            );
        setMagicalDefense
            (
                calculate_magical_defense
                    (parseInt
                        (data?.level),
                        (
                            parseInt(data?.intelligence)
                            +
                            parseInt(talismansData?.slot1?.bonus_int ? talismansData?.slot1?.bonus_int : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_int ? talismansData?.slot2?.bonus_int : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_int ? talismansData?.slot3?.bonus_int : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_int ? talismansData?.slot4?.bonus_int : '0')
                        )
                    )
            );
        setFireDefense
            (
                calculate_fire_defense
                    (parseInt
                        (data?.level),
                        (
                            parseInt(data?.fire)
                            +
                            parseInt(talismansData?.slot1?.bonus_fire ? talismansData?.slot1?.bonus_fire : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_fire ? talismansData?.slot2?.bonus_fire : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_fire ? talismansData?.slot3?.bonus_fire : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_fire ? talismansData?.slot4?.bonus_fire : '0')
                        )
                    )
            );
        setHolyDefense
            (
                calculate_holy_defense
                    (parseInt
                        (data?.level),
                        (
                            parseInt(data?.arcane)
                            +
                            parseInt(talismansData?.slot1?.bonus_arc ? talismansData?.slot1?.bonus_arc : '0')
                            +
                            parseInt(talismansData?.slot2?.bonus_arc ? talismansData?.slot2?.bonus_arc : '0')
                            +
                            parseInt(talismansData?.slot3?.bonus_arc ? talismansData?.slot3?.bonus_arc : '0')
                            +
                            parseInt(talismansData?.slot4?.bonus_arc ? talismansData?.slot4?.bonus_arc : '0')
                        )
                    )
            );

        setLightningDefense(calculate_lightning_defense(parseInt(data?.level)));
    }, [data, talismansData]);

    useEffect(() => {
        setPhysicalNegation
            (
                ((
                    Math.floor
                        (
                            (
                                100 -
                                (
                                    100
                                    *
                                    parseFloat(armorData?.Armor?.phy_negation ? 1 - parseFloat(armorData?.Armor?.phy_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Gauntlets?.phy_negation ? 1 - parseFloat(armorData?.Gauntlets?.phy_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Greaves?.phy_negation ? 1 - parseFloat(armorData?.Greaves?.phy_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Helmet?.phy_negation ? 1 - parseFloat(armorData?.Helmet?.phy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot1?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot1?.bonus_phy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot2?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot2?.bonus_phy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot3?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot3?.bonus_phy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot4?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot4?.bonus_phy_negation) / 100 : '1')
                                )) * 10
                        )
                ) / 10).toFixed(1)
            )
        setStrikeNegation
            (
                ((
                    Math.floor
                        (
                            (
                                100 -
                                (
                                    100
                                    *
                                    parseFloat(armorData?.Armor?.strike_negation ? 1 - parseFloat(armorData?.Armor?.strike_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Gauntlets?.strike_negation ? 1 - parseFloat(armorData?.Gauntlets?.strike_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Greaves?.strike_negation ? 1 - parseFloat(armorData?.Greaves?.strike_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Helmet?.strike_negation ? 1 - parseFloat(armorData?.Helmet?.strike_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot1?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot1?.bonus_phy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot2?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot2?.bonus_phy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot3?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot3?.bonus_phy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot4?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot4?.bonus_phy_negation) / 100 : '1')
                                )) * 10
                        )
                ) / 10).toFixed(1)
            )
        setSlashNegation
            (
                ((
                    Math.floor
                        (
                            (
                                100 -
                                (
                                    100
                                    *
                                    parseFloat(armorData?.Armor?.slash_negation ? 1 - parseFloat(armorData?.Armor?.slash_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Gauntlets?.slash_negation ? 1 - parseFloat(armorData?.Gauntlets?.slash_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Greaves?.slash_negation ? 1 - parseFloat(armorData?.Greaves?.slash_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Helmet?.slash_negation ? 1 - parseFloat(armorData?.Helmet?.slash_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot1?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot1?.bonus_phy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot2?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot2?.bonus_phy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot3?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot3?.bonus_phy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot4?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot4?.bonus_phy_negation) / 100 : '1')
                                )) * 10
                        )
                ) / 10).toFixed(1)
            )
        setPierceNegation
            (
                ((
                    Math.floor
                        (
                            (
                                100 -
                                (
                                    100
                                    *
                                    parseFloat(armorData?.Armor?.stab_negation ? 1 - parseFloat(armorData?.Armor?.stab_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Gauntlets?.stab_negation ? 1 - parseFloat(armorData?.Gauntlets?.stab_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Greaves?.stab_negation ? 1 - parseFloat(armorData?.Greaves?.stab_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Helmet?.stab_negation ? 1 - parseFloat(armorData?.Helmet?.stab_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot1?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot1?.bonus_phy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot2?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot2?.bonus_phy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot3?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot3?.bonus_phy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot4?.bonus_phy_negation ? 1 - parseFloat(talismansData?.slot4?.bonus_phy_negation) / 100 : '1')
                                )) * 10
                        )
                ) / 10).toFixed(1)
            )
        setMagicalNegation
            (
                ((
                    Math.floor
                        (
                            (
                                100 -
                                (
                                    100
                                    *
                                    parseFloat(armorData?.Armor?.magic_negation ? 1 - parseFloat(armorData?.Armor?.magic_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Gauntlets?.magic_negation ? 1 - parseFloat(armorData?.Gauntlets?.magic_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Greaves?.magic_negation ? 1 - parseFloat(armorData?.Greaves?.magic_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Helmet?.magic_negation ? 1 - parseFloat(armorData?.Helmet?.magic_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot1?.bonus_magic_negation ? 1 - parseFloat(talismansData?.slot1?.bonus_magic_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot2?.bonus_magic_negation ? 1 - parseFloat(talismansData?.slot2?.bonus_magic_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot3?.bonus_magic_negation ? 1 - parseFloat(talismansData?.slot3?.bonus_magic_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot4?.bonus_magic_negation ? 1 - parseFloat(talismansData?.slot4?.bonus_magic_negation) / 100 : '1')
                                )) * 10
                        )
                ) / 10).toFixed(1)
            )
        setFireNegation
            (
                ((
                    Math.floor
                        (
                            (
                                100 -
                                (
                                    100
                                    *
                                    parseFloat(armorData?.Armor?.fire_negation ? 1 - parseFloat(armorData?.Armor?.fire_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Gauntlets?.fire_negation ? 1 - parseFloat(armorData?.Gauntlets?.fire_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Greaves?.fire_negation ? 1 - parseFloat(armorData?.Greaves?.fire_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Helmet?.fire_negation ? 1 - parseFloat(armorData?.Helmet?.fire_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot1?.bonus_fire_negation ? 1 - parseFloat(talismansData?.slot1?.bonus_fire_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot2?.bonus_fire_negation ? 1 - parseFloat(talismansData?.slot2?.bonus_fire_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot3?.bonus_fire_negation ? 1 - parseFloat(talismansData?.slot3?.bonus_fire_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot4?.bonus_fire_negation ? 1 - parseFloat(talismansData?.slot4?.bonus_fire_negation) / 100 : '1')
                                )) * 10
                        )
                ) / 10).toFixed(1)
            )
        setLightningNegation
            (
                ((
                    Math.floor
                        (
                            (
                                100 -
                                (
                                    100
                                    *
                                    parseFloat(armorData?.Armor?.ligt_negation ? 1 - parseFloat(armorData?.Armor?.ligt_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Gauntlets?.ligt_negation ? 1 - parseFloat(armorData?.Gauntlets?.ligt_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Greaves?.ligt_negation ? 1 - parseFloat(armorData?.Greaves?.ligt_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Helmet?.ligt_negation ? 1 - parseFloat(armorData?.Helmet?.ligt_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot1?.bonus_ligt_negation ? 1 - parseFloat(talismansData?.slot1?.bonus_ligt_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot2?.bonus_ligt_negation ? 1 - parseFloat(talismansData?.slot2?.bonus_ligt_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot3?.bonus_ligt_negation ? 1 - parseFloat(talismansData?.slot3?.bonus_ligt_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot4?.bonus_ligt_negation ? 1 - parseFloat(talismansData?.slot4?.bonus_ligt_negation) / 100 : '1')
                                )) * 10
                        )
                ) / 10).toFixed(1)
            )
        setHolyNegation
            (
                ((
                    Math.floor
                        (
                            (
                                100 -
                                (
                                    100
                                    *
                                    parseFloat(armorData?.Armor?.holy_negation ? 1 - parseFloat(armorData?.Armor?.holy_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Gauntlets?.holy_negation ? 1 - parseFloat(armorData?.Gauntlets?.holy_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Greaves?.holy_negation ? 1 - parseFloat(armorData?.Greaves?.holy_negation) / 100 : '1')
                                    *
                                    parseFloat(armorData?.Helmet?.holy_negation ? 1 - parseFloat(armorData?.Helmet?.holy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot1?.bonus_holy_negation ? 1 - parseFloat(talismansData?.slot1?.bonus_holy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot2?.bonus_holy_negation ? 1 - parseFloat(talismansData?.slot2?.bonus_holy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot3?.bonus_holy_negation ? 1 - parseFloat(talismansData?.slot3?.bonus_holy_negation) / 100 : '1')
                                    *
                                    parseFloat(talismansData?.slot4?.bonus_holy_negation ? 1 - parseFloat(talismansData?.slot4?.bonus_holy_negation) / 100 : '1')
                                )) * 10
                        )
                ) / 10).toFixed(1)
            )
    }, [armorData, talismansData]);

    return (
        <View style={[containerStyle, style.container]}>
            <View style={style.title}>
                <DefaultText>
                    Defences
                </DefaultText>
            </View>
            <View style={style.items_container}>
                <Stat
                    value={physicalDefense + '/' + (physicalNegation) + '%'}
                    text={'Physical'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={strikeDefense + '/' + strikeNegation + '%'}
                    text={'vs Strike'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={slashDefense + '/' + slashNegation + '%'}
                    text={'vs Slash'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={pierceDefense + '/' + pierceNegation + '%'}
                    text={'vs Pierce'}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={magicalDefense + '/' + magicalNegation + '%'}
                    text={'Magical'}
                    color={colors.light_blue}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={fireDefense + '/' + fireNegation + '%'}
                    text={'Fire'}
                    color={colors.orange}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={lightningDefense + '/' + lightningNegation + '%'}
                    text={'Lightning'}
                    color={colors.yellow}
                    textStyle={style.stat_text}
                />
                <Stat
                    value={holyDefense + '/' + holyNegation + '%'}
                    text={'Holy'}
                    color={colors.light_yellow}
                    textStyle={style.stat_text}
                />
            </View>
        </View>
    );
}