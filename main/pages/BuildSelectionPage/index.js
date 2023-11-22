import React, { useState } from 'react';
import { View, Text } from 'react-native';
import style from './BuildSelectionPage.sass';
import Title from '../../components/Title';
import Card from '../../components/Card';
import CategoryButton from '../../components/CategoryButton';

export default function BuildSelectionPage({ route, navigation }) {

  const { id, name } = route.params;

  const moveTo = (path) => {
    navigation.navigate(path);
  };

  return (
    <View style={style.container}>
      <Title name={name}></Title>
      <Card style={style.card}>
        <CategoryButton
          icon={'class'}
          category={'Class'}
          styles={style.item}
          onClick={() => moveTo('ClassScreen')}
        />
        <CategoryButton
          icon={'weapons'}
          category={'Weapons'}
          styles={style.item}
        />
        <CategoryButton
          icon={'armor'}
          category={'Armor'}
          styles={style.item}
        />
        <CategoryButton
          icon={'talismans'}
          category={'Talismans'}
          styles={style.item}
        />
        <CategoryButton
          icon={'spells'}
          category={'Spells'}
          styles={style.item}
        />
        <CategoryButton
          icon={'stats'}
          category={'Stats'}
          styles={style.item}
        />
      </Card>
    </View>
  );
}