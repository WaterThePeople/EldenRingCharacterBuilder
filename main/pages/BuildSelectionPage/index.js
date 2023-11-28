import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './BuildSelectionPage.sass';
import Card from '../../components/Card';
import CategoryButton from '../../components/CategoryButton';
import GoBackButton from '../../components/GoBackButton';
import DefaultTextInput from '../../components/DefaultTextInput';
import { writeDataEditSaveName } from '../../../firebase';

export default function BuildSelectionPage({ route, navigation }) {

  const { save_name, email, length } = route.params;

  const [saveName, setSaveName] = useState(save_name ? save_name : 'SAVENAME');

  const moveTo = path => {
    navigation.navigate(path);
  };

  const goBackFunction = path => {
    navigation.navigate(path);
  };

  useEffect(() => {
    writeDataEditSaveName(
      length,
      email,
      length,
      saveName,
    )
  }, [saveName]);

  return (
    <View style={style.container}>
      <View style={style.title_container}>
        <GoBackButton goBackFunction={() => goBackFunction('SaveSelectionScreen')} />
        <DefaultTextInput style={style.text_input} goBackButtonExist value={saveName} onChange={setSaveName}></DefaultTextInput>
      </View>
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
        <CategoryButton icon={'armor'} category={'Armor'} styles={style.item} />
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
        <CategoryButton icon={'stats'} category={'Stats'} styles={style.item} />
      </Card>
    </View>
  );
}
