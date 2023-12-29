import React from 'react';
import { View, Image } from 'react-native';
import style from './SpellDetail.sass';
import GoBackButton from '../../../components/GoBackButton';
import Title from '../../../components/Title';
import CardScroll from '../../../components/CardScroll';
import DefaultText from '../../../components/DefaultText';
import DefaultButton from '../../../components/DefaultButton';
import { selectSpell } from '../../../../firebase';

export default function SpellDetail({ route, navigation }) {
    const { spell, slot, save_id } = route.params;

    const confirmSpell = () => {
        selectSpell(save_id, slot, spell);
        navigation.pop(2);
    };

    return (
        <View style={style.container}>
            <View style={style.title_container}>
                <GoBackButton goBackFunction={() => navigation.goBack()} />
                <Title
                    numberOfLines={2}
                    goBackButtonExist
                    name={spell?.spell_name}
                    textAlignLeft={true}
                />
            </View>
            <CardScroll container_style={style.card_container} style={style.card}>

                <View style={style.image_container}>
                    <Image
                        style={style.image}
                        source={{
                            uri: spell?.image_url,
                        }}
                    />
                </View>

                <View style={[style.spell_type, { flex: 1 }]}>
                    <View style={style.left}>
                        <View style={style.left_stats}>
                            <View style={style.text_color_container}>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}>
                                    Spell type
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
                                    {spell?.spell_type}
                                </DefaultText>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[style.spell_fp, { flex: 1 }]}>
                    <View style={style.left}>
                        <View style={style.left_stats}>
                            <View style={style.text_color_container}>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}>
                                    FP cost
                                </DefaultText>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}>
                                    {spell?.fp_cost}
                                </DefaultText>
                            </View>
                        </View>
                    </View>
                    <View style={style.right}>
                        <View style={style.right_stats}>
                            <View style={style.text_color_container}>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}>
                                    Slots used
                                </DefaultText>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}>
                                    {spell?.slots_used}
                                </DefaultText>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[style.effect_info, { flex: 1 }]}>
                    <View style={style.info}>
                        <DefaultText
                            numberOfLines={0}
                            style={style.text}
                        >
                            Effect
                        </DefaultText>
                        <View style={style.left_stats}>
                            <View style={style.text_color_container}>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}
                                    color={'#978563'}>
                                    {spell?.spell_effect}
                                </DefaultText>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[style.spell_requires, { flex: 1 }]}>
                    <View style={style.info}>
                        <DefaultText
                            numberOfLines={0}
                            style={style.text}
                        >
                            Requires
                        </DefaultText>
                        <View style={style.left_stats}>
                            <View style={style.text_color_container}>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}
                                    color={'#978563'}>
                                    Intelligence
                                </DefaultText>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}
                                >
                                    {spell?.int_req}
                                </DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}
                                    color={'#978563'}>
                                    Faith
                                </DefaultText>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}
                                >
                                    {spell?.fth_req}
                                </DefaultText>
                            </View>
                            <View style={style.text_color_container}>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}
                                    color={'#978563'}>
                                    Arcane
                                </DefaultText>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}
                                >
                                    {spell?.arc_req}
                                </DefaultText>
                            </View>
                        </View>
                    </View>
                </View>

            </CardScroll>
            {slot != 'slot' && (
                <DefaultButton
                    styles={style.confirm_button}
                    label={'Select spell'}
                    onClick={() => confirmSpell()}
                />
            )}
        </View>
    );
}