import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import style from './RankingSummaryPage.sass';
import Title from '../../components/Title';
import GoBackButton from '../../components/GoBackButton';
import CardScroll from '../../components/CardScroll';
import { getCurrentClass, getCurrentWeapons, getCurrentArmor, getCurrentTalismans, getCurrentSpells } from '../../../firebase';
import ClassContainer from '../../features/ClassContainer';
import WeaponsContainer from '../../features/WeaponsContainer';
import ArmorContainer from '../../features/ArmorContainer';
import TalismansContainer from '../../features/TalismansContainer';
import GeneralStatsContainer from '../../features/GeneralStatsContainer';
import DefencesContainer from '../../features/DefencesContainer';
import SpellsContainer from '../../features/SpellsContainer';
import ResistancesContainer from '../../features/ResistancesContainer';
import DefaultText from '../../components/DefaultText';
import Card from '../../components/Card';
import Loader from '../../components/Loader';

export default function RankingSummaryPage({ route, navigation }) {
  const { save_id, save_name } = route.params;

  const [currentClass, setCurrentClass] = useState('');
  const [currentWeapons, setCurrentWeapons] = useState([]);
  const [currentArmor, setCurrentArmor] = useState([]);
  const [currentTalismans, setCurrentTalismans] = useState([])
  const [currentSpells, setCurrentSpells] = useState([])

  const [classLoaded, setClassLoaded] = useState(false)
  const [weaponsLoaded, setWeaponsLoaded] = useState(false)
  const [armorLoaded, setArmorLoaded] = useState(false)
  const [talismansLoaded, setTalismansLoaded] = useState(false)
  const [spellsLoaded, setSpellsLoaded] = useState(false)

  const [isLoading, setIsLoading] = useState(true);

  const getCurrentWeaponsData = async () => {
    setCurrentWeapons(await getCurrentWeapons(save_id));
    setWeaponsLoaded(true)
  };

  const getCurrentClassData = async () => {
    let temp = await getCurrentClass(save_id);
    setCurrentClass(temp);
    setClassLoaded(true)
  };

  const getCurrentArmorData = async () => {
    let temp = await getCurrentArmor(save_id);
    setCurrentArmor(temp);
    setArmorLoaded(true)
  }

  const getCurrentTalismansData = async () => {
    setCurrentTalismans(await getCurrentTalismans(save_id));
    setTalismansLoaded(true)
  };

  const getCurrentSpellsData = async () => {
    setCurrentSpells(await getCurrentSpells(save_id));
    setSpellsLoaded(true)
  };

  useEffect(() => {
    getCurrentClassData();
    getCurrentWeaponsData();
    getCurrentArmorData();
    getCurrentTalismansData();
    getCurrentSpellsData();
  }, []);

  const checkIfLoading = () => {
    setIsLoading(true)
    if (classLoaded && weaponsLoaded && armorLoaded && talismansLoaded && spellsLoaded) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    checkIfLoading()
  }, [classLoaded, weaponsLoaded, armorLoaded, talismansLoaded, spellsLoaded]);

  return (
    <View style={style.container}>
      <View style={style.title_container}>
        <GoBackButton goBackFunction={() => navigation.goBack()} />
        <Title name={save_name} goBackButtonExist={true} textAlignLeft={true} />
      </View>
      {!isLoading ? (
        currentClass?.class ? (
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
                  armorData={currentArmor}
                  talismansData={currentTalismans}
                  containerStyle={[{ width: (Dimensions.get('window').width - 90) / 2 },]}
                />
                <ResistancesContainer
                  data={currentClass?.stats}
                  armorData={currentArmor}
                  talismansData={currentTalismans}
                  containerStyle={[{ width: (Dimensions.get('window').width - 90) / 2 },]}
                />
              </View>
            </View>
          </CardScroll>
        ) : (
          <Card style={style.empty_summary_card}>
            <DefaultText numberOfLines={0} style={style.empty_summary}>
              Choose a class in order to see your build summary!
            </DefaultText>
          </Card>
        )
      ) : (
        <Card style={style.empty_summary_card}>
          <Loader />
        </Card>
      )}
    </View>
  );
}