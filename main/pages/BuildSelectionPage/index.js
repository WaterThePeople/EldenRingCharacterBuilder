import React,{useState} from 'react';
import {View,Text} from 'react-native';
import style from './BuildSelectionPage.sass';
import Title from '../../components/Title';
import CardScroll from '../../components/CardScroll';

export default function BuildSelectionPage({route, navigation}) {

  const { id, name } = route.params;

  return (
    <View style={style.container}>
      <Title name={name}></Title>
      <CardScroll style={style.card}>

      </CardScroll>
    </View>
  );
}