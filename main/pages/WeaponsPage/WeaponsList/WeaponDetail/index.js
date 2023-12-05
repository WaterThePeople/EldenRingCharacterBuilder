import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import style from './WeaponDetail.sass';
import GoBackButton from '../../../../components/GoBackButton';
import Title from '../../../../components/Title';
import CardScroll from '../../../../components/CardScroll';
import DefaultText from '../../../../components/DefaultText';

export default function WeaponDetail({ route, navigation }) {

    const { weapon } = route.params;

    return (
        <View style={style.container}>
            <View style={style.title_container}>
                <GoBackButton goBackFunction={() => navigation.goBack()} />
                <Title goBackButtonExist name={weapon?.weapon_name} textAlignLeft={true} />
            </View>
            <CardScroll container_style={style.card_container} style={style.card}>
                <Image
                    style={style.image}
                    source={{
                        uri: weapon?.image_url,
                    }}
                />
                <View style={style.stats_info}>
                    <View style={style.attack}>
                        <DefaultText style={style.text}>Attack</DefaultText>
                        <View style={[style.attack_stats]} >
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text}>Phy</DefaultText>
                                <DefaultText style={style.text}>{weapon?.weapon_phy_damage}</DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#24ADCB'}>Mag</DefaultText>
                                <DefaultText style={style.text}>{weapon?.weapon_mag_damage}</DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#DC700C'}>Fire</DefaultText>
                                <DefaultText style={style.text}>{weapon?.weapon_fire_damage}</DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#EFDF4D'}>Light</DefaultText>
                                <DefaultText style={style.text}>{weapon?.weapon_light_damage}</DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#F9C234'}>Holy</DefaultText>
                                <DefaultText style={style.text}>{weapon?.weapon_holy_damage}</DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#FF0101'}>Critikal</DefaultText>
                                <DefaultText style={style.text}>{weapon?.weapon_crit}</DefaultText>
                            </View>
                        </View>
                    </View>
                    <View style={style.guard}>
                        <DefaultText style={style.text}>Guard</DefaultText>
                        <View style={[style.attack_stats]} >
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text}>Phy</DefaultText>
                                <DefaultText style={style.text}>{weapon?.weapon_phy_damage}</DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#24ADCB'}>Mag</DefaultText>
                                <DefaultText style={style.text}>{weapon?.weapon_mag_damage}</DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#DC700C'}>Fire</DefaultText>
                                <DefaultText style={style.text}>{weapon?.weapon_fire_damage}</DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#EFDF4D'}>Light</DefaultText>
                                <DefaultText style={style.text}>{weapon?.weapon_light_damage}</DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#F9C234'}>Holy</DefaultText>
                                <DefaultText style={style.text}>{weapon?.weapon_holy_damage}</DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#572CB4'}>Guard</DefaultText>
                                <DefaultText style={style.text}>{weapon?.weapon_crit}</DefaultText>
                            </View>
                        </View>
                    </View>
                </View>
            </CardScroll>
        </View>
    );
}