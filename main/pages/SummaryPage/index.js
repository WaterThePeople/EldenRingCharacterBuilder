import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import style from './SummaryPage.sass';
import Title from '../../components/Title';
import GoBackButton from '../../components/GoBackButton';

export default function SummaryPage({route, navigation}) {
  const {save_id, save_name} = route.params;

  return (
    <View style={style.container}>
      <View style={style.title_container}>
        <GoBackButton goBackFunction={() => navigation.goBack()} />
        <Title name={save_name} goBackButtonExist={true} />
      </View>
    </View>
  );
}
