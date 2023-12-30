import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import style from './SummaryPage.sass';
import Title from '../../components/Title';
import GoBackButton from '../../components/GoBackButton';
import CardScroll from '../../components/CardScroll';
import { getCurrentClass, getCurrentWeapons, getCurrentArmor, getCurrentTalismans, getCurrentSpells, publishSave, makeSavePrivate } from '../../../firebase';
import { getAuth } from 'firebase/auth';
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
import DefaultButtonIcon from '../../components/DefaultButtonIcon';
import ModalConfirm from '../../components/ModalConfirm';

export default function SummaryPage({ route, navigation }) {
  const { save_id, save_name, isPublic } = route.params;

  const auth = getAuth();
  const user = auth.currentUser;

  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisiblePrivate, setModalVisiblePrivate] = useState(false)
  const [isPrivate, setIsPrivate] = useState(true)

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

  const publishCharacter = async () => {
    try {
      setIsLoading(true)
      if (user?.email && user?.displayName) {
        await publishSave(
          save_id,
          save_name,
          user?.email,
          user?.displayName,
        )
      }
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setModalVisible(false)
      setIsLoading(false)
      setIsPrivate(false)
    }
  }

  const removePublishedCharacter = async () => {
    try {
      setIsLoading(true)
      await makeSavePrivate(save_id);
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setModalVisiblePrivate(false)
      setIsPrivate(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsPrivate(!isPublic)
  }, [isPublic]);

  return (
    <>
      <View style={style.container}>
        <View style={style.title_container}>
          <GoBackButton goBackFunction={() => navigation.goBack()} />
          <Title name={save_name} goBackButtonExist={true} autoFont={true} numberOfLines={1} textAlignLeft={true} buttonSize={164} />
          {isPrivate ? (
            <DefaultButtonIcon size={64} icon={'share'} onClick={() => (!isLoading && currentClass?.class) && setModalVisible(true)} />
          ) : (
            <DefaultButtonIcon size={64} icon={'share'} onClick={() => (!isLoading && currentClass?.class) && setModalVisiblePrivate(true)} />
          )}
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
      <ModalConfirm
        visible={modalVisible}
        setVisible={setModalVisible}
        text={'Do you want to publish your character?'}
        textInfo=
        {
          'This makes your character public, meaing any of the users can see it on the ranking list.'
          +
          'Any changes you make after sharing this character will also be seen on the ranking.'
        }
        onDecline={() => setModalVisible(false)}
        onConfirm={() => publishCharacter()}
        confirmLabel={'Confirm'}
        declineLabel={'Cancel'}
        confirmColor={'green'}
        declineColor={'red'}
      />
      <ModalConfirm
        visible={modalVisiblePrivate}
        setVisible={setModalVisiblePrivate}
        text={'This character is already public. Do you want to make it private again?'}
        onDecline={() => setModalVisiblePrivate(false)}
        onConfirm={() => removePublishedCharacter()}
        confirmLabel={'Confirm'}
        declineLabel={'Cancel'}
        confirmColor={'green'}
        declineColor={'red'}
      />
    </>
  );
}
