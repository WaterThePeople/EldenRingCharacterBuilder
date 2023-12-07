import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import style from './WeaponsPage.sass';
import GoBackButton from '../../components/GoBackButton';
import CategoryTitle from '../../components/CategoryTitle';
import CategoryButtonItem from '../../components/CategoryButtonItem';
import Card from '../../components/Card';
import {getData, getCurrentWeapons} from '../../../firebase';
import {useIsFocused} from '@react-navigation/native';

export default function WeaponsPage({route, navigation}) {
  const isFocused = useIsFocused();
  const {save_id} = route.params;

  const [weapons, setWeapons] = useState([]);

  const [weapon_r1, setWeapon_r1] = useState('');
  const [weapon_r2, setWeapon_r2] = useState('');
  const [weapon_r3, setWeapon_r3] = useState('');
  const [weapon_l1, setWeapon_l1] = useState('');
  const [weapon_l2, setWeapon_l2] = useState('');
  const [weapon_l3, setWeapon_l3] = useState('');

  const [currentWeapons, setCurrentWeapons] = useState([]);

  const getCurrentWeaponsData = async () => {
    setCurrentWeapons(await getCurrentWeapons(save_id));
  };

  useEffect(() => {
    if (isFocused) {
      getData('weapons', setWeapons);
      getCurrentWeaponsData();
    }
  }, [isFocused]);

  useEffect(() => {
    setWeapon_r1(currentWeapons?.weapon_r1);
    setWeapon_r2(currentWeapons?.weapon_r2);
    setWeapon_r3(currentWeapons?.weapon_r3);
    setWeapon_l1(currentWeapons?.weapon_l1);
    setWeapon_l2(currentWeapons?.weapon_l2);
    setWeapon_l3(currentWeapons?.weapon_l3);
  }, [currentWeapons]);

  const moveToWeapon = (category_image, category_name, hand) => {
    navigation.navigate('WeaponsList', {
      category_name: category_name,
      category_image: category_image,
      hand: hand,
      weapons: weapons ? weapons?.data : [],
      save_id: save_id,
    });
  };

  return (
    <View style={style.container}>
      <View style={style.title_container}>
        <GoBackButton goBackFunction={() => navigation.goBack()} />
        <CategoryTitle
          icon={'weapons'}
          name={'Weapons'}
          goBackButtonExist></CategoryTitle>
      </View>
      <Card style={style.card}>
        <CategoryButtonItem
          icon={!weapon_r1 && 'right_hand'}
          image_url={weapon_r1 && weapon_r1?.image_url}
          category={weapon_r1?.weapon_name ? weapon_r1?.weapon_name : 'Empty'}
          styles={style.item}
          onClick={() =>
            moveToWeapon('right_hand', 'Right hand 1', 'weapon_r1')
          }
        />
        <CategoryButtonItem
          icon={!weapon_l1 && 'left_hand'}
          image_url={weapon_l1 && weapon_l1?.image_url}
          category={weapon_l1?.weapon_name ? weapon_l1?.weapon_name : 'Empty'}
          styles={style.item}
          onClick={() => moveToWeapon('left_hand', 'Left hand 1', 'weapon_l1')}
        />
        <CategoryButtonItem
          icon={!weapon_r2 && 'right_hand'}
          image_url={weapon_r2 && weapon_r2?.image_url}
          category={weapon_r2?.weapon_name ? weapon_r2?.weapon_name : 'Empty'}
          styles={style.item}
          onClick={() =>
            moveToWeapon('right_hand', 'Right hand 2', 'weapon_r2')
          }
        />
        <CategoryButtonItem
          icon={!weapon_l2 && 'left_hand'}
          image_url={weapon_l2 && weapon_l2?.image_url}
          category={weapon_l2?.weapon_name ? weapon_l2?.weapon_name : 'Empty'}
          styles={style.item}
          onClick={() => moveToWeapon('left_hand', 'Left hand 2', 'weapon_l2')}
        />
        <CategoryButtonItem
          icon={!weapon_r3 && 'right_hand'}
          image_url={weapon_r3 && weapon_r3?.image_url}
          category={weapon_r3?.weapon_name ? weapon_r3?.weapon_name : 'Empty'}
          styles={style.item}
          onClick={() =>
            moveToWeapon('right_hand', 'Right hand 3', 'weapon_r3')
          }
        />
        <CategoryButtonItem
          icon={!weapon_l3 && 'left_hand'}
          image_url={weapon_l3 && weapon_l3?.image_url}
          category={weapon_l3?.weapon_name ? weapon_l3?.weapon_name : 'Empty'}
          styles={style.item}
          onClick={() => moveToWeapon('left_hand', 'Left hand 3', 'weapon_l3')}
        />
      </Card>
    </View>
  );
}
