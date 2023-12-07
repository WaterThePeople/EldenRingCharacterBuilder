import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import style from './WeaponsList.sass';
import GoBackButton from '../../../components/GoBackButton';
import CategoryTitle from '../../../components/CategoryTitle';
import CardScroll from '../../../components/CardScroll';
import Weapon from '../../../components/Weapon';

export default function WeaponsList({ route, navigation }) {

    const { category_name, category_image, weapons, save_id, hand} = route.params;

    const moveToWeaponDetail = (weapon) => {
        navigation.navigate('WeaponDetail',
            {
                weapon: weapon,
                hand: hand,
                save_id: save_id,
            })
    };

    return (
        <View style={style.container}>
            <View style={style.title_container}>
                <GoBackButton goBackFunction={() => navigation.goBack()} />
                <CategoryTitle icon={category_image} name={category_name} goBackButtonExist></CategoryTitle>
            </View>
            <CardScroll style={style.card}>
                {weapons?.map((item, index) => (
                    <Weapon
                        key={index}
                        weapon_name={item?.weapon_name}
                        image_url={item?.image_url}
                        onClick={() => moveToWeaponDetail(item)}
                    />
                ))}
            </CardScroll>
        </View>
    );
}