import React from 'react';
import { View } from 'react-native';
import style from './RankingPage.sass';
import Title from '../../../components/Title';
import CardScroll from '../../../components/CardScroll';

export default function RankingPage() {

    return (
        <View style={style.container}>
            <Title name={'Community ranking'}></Title>
            <CardScroll style={style.card}>

            </CardScroll>
        </View>
    );
}