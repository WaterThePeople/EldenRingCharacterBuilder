import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import style from './SummaryPage.sass';
import Title from '../../components/Title';
import GoBackButton from '../../components/GoBackButton';
import CardScroll from '../../components/CardScroll';
import { getCurrentClass, getCurrentWeapons, getCurrentArmor, getCurrentTalismans, getCurrentSpells } from '../../../firebase';
import ClassContainer from './ClassContainer';
import WeaponsContainer from './WeaponsContainer';
import ArmorContainer from './ArmorContainer';
import TalismansContainer from './TalismansContainer';
import GeneralStatsContainer from './GeneralStatsContainer';
import DefencesContainer from './DefencesContainer';
import SpellsContainer from './SpellsContainer';
import ResistancesContainer from './ResistancesContainer';

export default function SummaryPage({ route, navigation }) {
  const { save_id, save_name } = route.params;

  const [currentClass, setCurrentClass] = useState('');
  const [currentWeapons, setCurrentWeapons] = useState([]);
  const [currentArmor, setCurrentArmor] = useState([]);
  const [currentTalismans, setCurrentTalismans] = useState([])
  const [currentSpells, setCurrentSpells] = useState([])

  const getCurrentWeaponsData = async () => {
    setCurrentWeapons(await getCurrentWeapons(save_id));
  };

  const getCurrentClassData = async () => {
    let temp = await getCurrentClass(save_id);
    setCurrentClass(temp);
  };

  const getCurrentArmorData = async () => {
    let temp = await getCurrentArmor(save_id);
    setCurrentArmor(temp);
  }

  const getCurrentTalismansData = async () => {
    setCurrentTalismans(await getCurrentTalismans(save_id));
  };

  const getCurrentSpellsData = async () => {
    setCurrentSpells(await getCurrentSpells(save_id));
  };

  useEffect(() => {
    getCurrentClassData();
    getCurrentWeaponsData();
    getCurrentArmorData();
    getCurrentTalismansData();
    getCurrentSpellsData();
  }, []);

  return (
    <View style={style.container}>
      <View style={style.title_container}>
        <GoBackButton goBackFunction={() => navigation.goBack()} />
        <Title name={save_name} goBackButtonExist={true} textAlignLeft={true} />
      </View>
      <CardScroll style={style.card}>
        <View style={style.row}>
          <WeaponsContainer
            data={currentWeapons}
            containerStyle={[{ width: (Dimensions.get('window').width - 90) / 2 },]}
          />
          <ClassContainer
            statsData={currentClass?.stats}
            talismansData={currentTalismans}
            containerStyle={[{ width: (Dimensions.get('window').width - 90) / 2 },]}
          />
        </View>
        <View style={style.row}>
          <ArmorContainer
            data={currentArmor}
            containerStyle={[{ width: (Dimensions.get('window').width - 90) / 2 },]}
          />
          <GeneralStatsContainer
            data={currentClass?.stats}
            talismansData={currentTalismans}
            weaponsData={currentWeapons}
            armorData={currentArmor}
            containerStyle={[{ width: (Dimensions.get('window').width - 90) / 2 },]}
          />
        </View>
        <View style={style.row}>
          <View style={style.column}>
            <TalismansContainer
              data={currentTalismans}
              containerStyle={[{ width: (Dimensions.get('window').width - 90) / 2 },]}
            />
            <SpellsContainer
              data={currentSpells}
              containerStyle={[{ width: (Dimensions.get('window').width - 90) / 2 },]}
            />
          </View>
          <View style={style.column}>
            <DefencesContainer
              data={currentClass?.stats}
              containerStyle={[{ width: (Dimensions.get('window').width - 90) / 2 },]}
            />
            <ResistancesContainer
              data={currentClass?.stats}
              containerStyle={[{ width: (Dimensions.get('window').width - 90) / 2 },]}
            />
          </View>
        </View>
      </CardScroll>
    </View>
  );
}
