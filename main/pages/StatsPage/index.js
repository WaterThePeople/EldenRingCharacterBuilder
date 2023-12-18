import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './StatsPage.sass';
import Title from '../../components/Title';
import GoBackButton from '../../components/GoBackButton';

export default function StatsPage({ route, navigation }) {
    const { save_id } = route.params;

    return (
        <View style={style.container}>
            <View style={style.title_container}>
                <GoBackButton goBackFunction={() => navigation.goBack()} />
                <Title textAlignLeft={true} name={'class name'} goBackButtonExist={true} />
            </View>
        </View>
    );
}