import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import style from './ArmorDetail.sass';
import GoBackButton from '../../../components/GoBackButton';
import Title from '../../../components/Title';
import CardScroll from '../../../components/CardScroll';
import DefaultText from '../../../components/DefaultText';
import DefaultButton from '../../../components/DefaultButton';
import { selectArmor } from '../../../../firebase';

export default function ArmorDetail({ route, navigation }) {
    const { armor, category_name, save_id } = route.params;

    const confirmArmor = () => {
        selectArmor(save_id, category_name, armor);
        navigation.pop(2);
    };

    return (
        <View style={style.container}>
            <View style={style.title_container}>
                <GoBackButton goBackFunction={() => navigation.goBack()} />
                <Title
                    goBackButtonExist
                    name={armor?.name}
                    textAlignLeft={true}
                />
            </View>
            <CardScroll container_style={style.card_container} style={style.card}>

                <View style={style.image_container}>
                    <Image
                        style={style.image}
                        source={{
                            uri: armor?.image_url,
                        }}
                    />
                </View>

                <View style={[style.stats_info, { flex: 1 }]}>
                    <View style={style.left}>
                        <DefaultText style={style.text}>Damage negation</DefaultText>
                        <View style={style.left_stats}>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#978563'}>Physical</DefaultText>
                                <DefaultText style={style.text}>
                                    {armor?.phy_negation}
                                </DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#978563'}>vs Strike</DefaultText>
                                <DefaultText style={style.text}>
                                    {armor?.strike_negation}
                                </DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#978563'}>vs Slash</DefaultText>
                                <DefaultText style={style.text}>
                                    {armor?.slash_negation}
                                </DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#978563'}>vs Pierce</DefaultText>
                                <DefaultText style={style.text}>
                                    {armor?.stab_negation}
                                </DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#24ADCB'}>
                                    Magic
                                </DefaultText>
                                <DefaultText style={style.text}>
                                    {armor?.magic_negation}
                                </DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#DC700C'}>
                                    Fire
                                </DefaultText>
                                <DefaultText style={style.text}>
                                    {armor?.fire_negation}
                                </DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#EFDF4D'}>
                                    Lightning
                                </DefaultText>
                                <DefaultText style={style.text}>
                                    {armor?.ligt_negation}
                                </DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#F9C234'}>
                                    Holy
                                </DefaultText>
                                <DefaultText style={style.text}>
                                    {armor?.holy_negation}
                                </DefaultText>
                            </View>
                        </View>
                    </View>
                    <View style={style.right}>
                        <DefaultText style={style.text}>Resistance</DefaultText>
                        <View style={[style.right_stats]}>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#978563'}>Immunity</DefaultText>
                                <DefaultText style={style.text}>
                                    {armor?.immunity}
                                </DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#978563'}>Robustness</DefaultText>
                                <DefaultText style={style.text}>
                                    {armor?.robustness}
                                </DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#978563'}>Focus</DefaultText>
                                <DefaultText style={style.text}>
                                    {armor?.focus}
                                </DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#978563'}>Vitality</DefaultText>
                                <DefaultText style={style.text}>
                                    {armor?.vitality}
                                </DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText style={style.text} color={'#978563'}>Poise</DefaultText>
                                <DefaultText style={style.text}>
                                    {armor?.poise}
                                </DefaultText>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[style.type_info, { flex: 1 }]}>
                    <View style={style.left}>
                        <View style={style.left_stats}>
                            <View style={style.text_color_container}>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}
                                    color={'#978563'}>
                                    {category_name === 'Armor' ? 'Chestplate' : category_name}
                                </DefaultText>
                            </View>
                        </View>
                    </View>
                    <View style={style.right}>
                        <View style={style.right_stats}>
                            <View style={style.text_color_container}>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}
                                    color={'#978563'}
                                >
                                    Weight
                                </DefaultText>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}
                                >
                                    {armor?.wgt}
                                </DefaultText>
                            </View>
                        </View>
                    </View>
                </View>

            </CardScroll>
            <DefaultButton
                styles={style.confirm_button}
                label={'Select ' + category_name}
                onClick={() => confirmArmor()}
            />
        </View>
    );
}