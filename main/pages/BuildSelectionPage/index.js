import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './BuildSelectionPage.sass';
import Card from '../../components/Card';
import CategoryButton from '../../components/CategoryButton';
import GoBackButton from '../../components/GoBackButton';
import DefaultTextInput from '../../components/DefaultTextInput';
import { editSaveName } from '../../../firebase';
import { getSave } from '../../../firebase';
import { editPublishedSaveName } from '../../../firebase';
import Loader from '../../components/Loader';
import { useIsFocused } from '@react-navigation/native';

export default function BuildSelectionPage({ route, navigation }) {
  const { saveFile } = route.params;
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(false);

  const [save, setSave] = useState([]);

  const [saveName, setSaveName] = useState('');
  const [saveID, setSaveID] = useState(0);
  const [saveEmail, setSaveEmail] = useState('');

  const getSaveData = async () => {
    setSave(await getSave(saveFile));
    setIsLoading(false);
  };

  useEffect(() => {
    if (isFocused) {
      setIsLoading(true);
      getSaveData();
    }
  }, [isFocused]);

  useEffect(() => {
    setSaveName(save?.save_name);
    setSaveID(save?.save_id);
    setSaveEmail(save?.user_email);
  }, [save]);

  useEffect(() => {
    if (saveName) {
      editSaveName(saveID, saveEmail, saveName);
      if (save?.isPublic) {
        editPublishedSaveName(saveID, saveEmail, saveName);
      }
    }
  }, [saveName]);

  const moveToScreen = (save_id, screen, save_name, isPublic) => {
    navigation.navigate(screen, {
      save_id: save_id,
      save_name: save_name,
      isPublic: isPublic,
    });
  };

  return (
    <View style={style.container}>
      <View style={style.title_container}>
        <GoBackButton goBackFunction={() => navigation.goBack()} />
        {isLoading ? (
          <Card style={style.card_loading}>
            <Loader size={50} />
          </Card>
        ) : (
          <DefaultTextInput
            style={style.text_input}
            goBackButtonExist
            value={saveName}
            onChange={setSaveName}
            maxLength={16}/>
        )}
      </View>
      {!isLoading ? (
        <Card style={style.card}>
          <CategoryButton
            icon={'class'}
            category={'Stats'}
            styles={style.item}
            onClick={() => moveToScreen(saveID, 'ClassScreen')}
          />
          <CategoryButton
            icon={'weapons'}
            category={'Weapons'}
            styles={style.item}
            onClick={() => moveToScreen(saveID, 'WeaponsScreen')}
          />
          <CategoryButton
            icon={'armor'}
            category={'Armor'}
            styles={style.item}
            onClick={() => moveToScreen(saveID, 'ArmorsScreen')}
          />
          <CategoryButton
            icon={'talismans'}
            category={'Talismans'}
            styles={style.item}
            onClick={() => moveToScreen(saveID, 'TalismansScreen')}
          />
          <CategoryButton
            icon={'spells'}
            category={'Spells'}
            styles={style.item}
            onClick={() => moveToScreen(saveID, 'SpellsScreen')}
          />
          <CategoryButton
            icon={'stats'}
            category={'Summary'}
            styles={style.item}
            onClick={() => moveToScreen(saveID, 'SummaryScreen', saveName, save?.isPublic)}
          />
        </Card>
      ) : (
        <Card style={style.card_loading_container}>
          <Loader />
        </Card>
      )}
    </View>
  );
}
