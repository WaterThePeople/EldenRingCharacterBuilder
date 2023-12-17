import React from 'react';
import { View, Image } from 'react-native';
import style from './TalismanDetail.sass';
import GoBackButton from '../../../components/GoBackButton';
import Title from '../../../components/Title';
import CardScroll from '../../../components/CardScroll';
import DefaultText from '../../../components/DefaultText';
import DefaultButton from '../../../components/DefaultButton';
import { selectTalisman } from '../../../../firebase';

export default function TalismanDetail({ route, navigation }) {
    const { talisman, slot, save_id, current_talisman } = route.params;

    const confirmTalisman = () => {
        selectTalisman(save_id, slot, talisman, current_talisman);
        navigation.pop(2);
    };

    return (
        <View style={style.container}>
            <View style={style.title_container}>
                <GoBackButton goBackFunction={() => navigation.goBack()} />
                <Title
                    numberOfLines={2}
                    goBackButtonExist
                    name={talisman?.talisman_name}
                    textAlignLeft={true}
                />
            </View>
            <CardScroll container_style={style.card_container} style={style.card}>

                <View style={style.image_container}>
                    <Image
                        style={style.image}
                        source={{
                            uri: talisman?.image_url,
                        }}
                    />
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
                                    {talisman?.talisman_effect}
                                </DefaultText>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[style.type_info, { flex: 1 }]}>
                    <View style={style.info}>
                        <View style={style.left_stats}>
                            <View style={style.text_color_container}>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}
                                >
                                    Weight
                                </DefaultText>
                                <DefaultText
                                    numberOfLines={0}
                                    style={style.text}
                                    color={'#978563'}
                                >
                                    {talisman?.talisman_wgt}
                                </DefaultText>
                            </View>
                        </View>
                    </View>
                </View>

            </CardScroll>
            <DefaultButton
                styles={style.confirm_button}
                label={'Select talisman'}
                onClick={() => confirmTalisman()}
            />
        </View>
    );
}