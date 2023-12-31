import React, { useState, useEffect } from 'react';
import { View, Dimensions, Image } from 'react-native';
import style from './RankingSummaryPage.sass';
import Title from '../../components/Title';
import GoBackButton from '../../components/GoBackButton';
import CardScroll from '../../components/CardScroll';
import { getCurrentClass, getCurrentWeapons, getCurrentArmor, getCurrentTalismans, getCurrentSpells, rateCharacter } from '../../../firebase';
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
import ModalDropdownRating from '../../components/ModalDropdownRating';
import { getAuth } from 'firebase/auth'
import icons from '../../constantData/icons';

export default function RankingSummaryPage({ route, navigation }) {
  const { save_id, save_name, ratings } = route.params;

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

  const auth = getAuth();
  const user = auth.currentUser;

  const [modalVisible, setModalVisible] = useState(false)
  const [userRating, setUserRating] = useState('Select')
  const [tempRatings, setTempRatings] = useState('')

  const [currentRating, setCurrentRating] = useState('')

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

  const addRating = (x) => {
    let temp = ratings
    temp.push({ email: user?.email, rating: x })

    rateCharacter(save_id, temp)
    setTempRatings(temp)
  }

  const changeRating = (x) => {
    let temp = []
    ratings.map((item) => {
      if (item?.email === user?.email) {
        temp.push({ email: item?.email, rating: x })
      } else {
        temp.push(item)
      }
    })
    setTempRatings(temp)
    rateCharacter(save_id, temp)
  }

  useEffect(() => {
    ratings.forEach(element => {
      if (element?.email === user?.email) {
        setUserRating(element?.rating)
      }
    });
  }, [ratings]);

  const chooseRating = (rating) => {
    setUserRating(rating)
    if (rating != 'Select') {
      if (ratings.filter(e => e.email === user?.email).length > 0) {
        changeRating(rating)
      } else {
        addRating(rating)
      }
      setModalVisible(false)
    }
  }

  const calculateRating = (ratings) => {
    let count = 0
    let length = 0
    ratings.forEach(element => {
      count = count + element?.rating
      length = length + 1
    });

    let solution = 0

    if (length > 0) {
      solution = (Math.floor((count / length) * 100) / 100).toFixed(2);
    }
    else {
      solution = 0
    }

    return solution
  }

  iconSelect = (name) => {
    if (name === null) {
      return icons.empty
    }
    return icons[name]
  }

  const calculateRatingIcon = () => {
    let temp = parseInt(currentRating)
    if (temp === 0) {
      return ('')
    }
    else if (temp > 0 && temp <= 1) {
      return ('rating1')
    }
    else if (temp > 1 && temp <= 2) {
      return ('rating2')
    }
    else if (temp > 2 && temp <= 3) {
      return ('rating3')
    }
    else if (temp > 3 && temp <= 4) {
      return ('rating4')
    }
    else if (temp > 4 && temp <= 5) {
      return ('rating5')
    }
  }

  useEffect(() => {
    setCurrentRating(calculateRating(tempRatings ? tempRatings : ratings))
  }, [ratings, tempRatings]);

  return (
    <>
      <View style={style.container}>
        <View style={style.title_container}>
          <GoBackButton goBackFunction={() => navigation.goBack()} />
          <Title name={save_name} goBackButtonExist={true} autoFont={true} numberOfLines={1} textAlignLeft={true} buttonSize={164} />
          <DefaultButtonIcon size={64} icon={'rating'} onClick={() => setModalVisible(true)} />
        </View>
        {!isLoading ? (
          currentClass?.class ? (
            <CardScroll style={style.card}>
              <View style={[style.rating_container_box]}>
                <DefaultText autoFont={true} style={style.rating_title_label}>
                  Rating:
                </DefaultText>
                {parseInt(currentRating) > 0 ? (
                  <View style={style.rating_container}>
                    <DefaultText autoFont={true} style={style.rating_label} textClip={true}>
                      {currentRating}
                    </DefaultText>
                    <Image
                      style={style.icon}
                      source={iconSelect(calculateRatingIcon())}
                    />
                  </View>
                ) : (
                  <DefaultText autoFont={true} style={style.rating_label_empty} textClip={true}>
                    No ratings yet!
                  </DefaultText>
                )}
              </View>
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
                This build has no class selected!
              </DefaultText>
            </Card>
          )
        ) : (
          <Card style={style.empty_summary_card}>
            <Loader />
          </Card>
        )}
      </View>
      <ModalDropdownRating
        visible={modalVisible}
        setVisible={setModalVisible}
        text={userRating === 'Select' ? 'Rate this character!' : 'Change your rating!'}
        rating={userRating}
        setRating={chooseRating}
        dropdownList={[1, 2, 3, 4, 5]}
      />
    </>
  );
}