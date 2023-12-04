import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './WeaponPage.sass';
import GoBackButton from '../../../components/GoBackButton';
import CategoryTitle from '../../../components/CategoryTitle';
import CardScroll from '../../../components/CardScroll';

export default function WeaponPage({ route, navigation }) {

    const { icon, name } = route.params;

    return (
        <View style={style.container}>
            <View style={style.title_container}>
                <GoBackButton goBackFunction={() => navigation.goBack()} />
                <CategoryTitle icon={icon} name={name} goBackButtonExist></CategoryTitle>
            </View>
            <CardScroll style={style.card}>
                
            </CardScroll>
        </View>
    );
}