import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './WeaponsList.sass';
import GoBackButton from '../../components/GoBackButton';
import CategoryTitle from '../../components/CategoryTitle';
import CardScroll from '../../components/CardScroll';
import ListItem from '../../components/ListItem';
import DefaultButton from '../../components/DefaultButton';
import { deleteWeapon } from '../../../firebase';

export default function WeaponsList({ route, navigation }) {

    const { category_name, category_image, weapons, save_id, hand, current_weapon } = route.params;

    const moveToWeaponDetail = (weapon) => {
        navigation.navigate('WeaponDetail',
            {
                weapon: weapon,
                hand: hand,
                save_id: save_id,
            })
    };

    const removeWeapon = () => {
        deleteWeapon(save_id, hand);
        navigation.pop(1);
    };

    return (
        <View style={style.container}>
            <View style={style.title_container}>
                <GoBackButton goBackFunction={() => navigation.goBack()} />
                <CategoryTitle icon={category_image} name={category_name} goBackButtonExist></CategoryTitle>
            </View>
            <CardScroll style={style.card}>
                {weapons?.map((item, index) => (
                    <ListItem
                        key={index}
                        isCurrent={item?.weapon_name === current_weapon?.weapon_name}
                        name={item?.weapon_name}
                        image_url={item?.image_url}
                        onClick={() => moveToWeaponDetail(item)}
                    />
                ))}
            </CardScroll>
            <DefaultButton
                styles={style.confirm_button}
                label={'Clear slot'}
                onClick={() => removeWeapon()}
            />
        </View>
    );
}