import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import style from './WeaponsPage.sass';
import GoBackButton from '../../components/GoBackButton';
import CategoryTitle from '../../components/CategoryTitle';
import CategoryButtonItem from '../../components/CategoryButtonItem';
import Card from '../../components/Card';
import {getData} from '../../../firebase';

export default function WeaponsPage({route, navigation}) {
  const {
    save_id,
    weaponR1,
    weaponR2,
    weaponR3,
    weaponL1,
    weaponL2,
    weaponL3,
  } = route.params;

  const [weapons, setWeapons] = useState([]);

  const [weapon_r1, setWeapon_r1] = useState(weaponR1 ? weaponR1 : '')
  const [weapon_r2, setWeapon_r2] = useState(weaponR2 ? weaponR2 : '')
  const [weapon_r3, setWeapon_r3] = useState(weaponR3 ? weaponR3 : '')
  const [weapon_l1, setWeapon_l1] = useState(weaponL1 ? weaponL1 : '')
  const [weapon_l2, setWeapon_l2] = useState(weaponL2 ? weaponL2 : '')
  const [weapon_l3, setWeapon_l3] = useState(weaponL3 ? weaponL3 : '')

  useEffect(() => {
    getData('weapons', setWeapons);
  }, []);

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
          onClick={() => moveToWeapon('right_hand', 'Right hand 1', 'weapon_r1')}
        />
        <CategoryButtonItem
          icon={!weapon_l1 && 'left_hand'}
          image_url={weapon_l1 && weapon_l1?.image_url}
          category={weapon_l1?.weapon_name ? weapon_l1?.weapon_name : 'Empty'}
          styles={style.item}
          onClick={() => moveToWeapon('left_hand', 'Left hand 1','weapon_l1')}
        />
        <CategoryButtonItem
          icon={!weapon_r2 && 'right_hand'}
          image_url={weapon_r2 && weapon_r2?.image_url}
          category={weapon_r2?.weapon_name ? weapon_r2?.weapon_name : 'Empty'}
          styles={style.item}
          onClick={() => moveToWeapon('right_hand', 'Right hand 2','weapon_r2')}
        />
        <CategoryButtonItem
          icon={!weapon_l2 && 'left_hand'}
          image_url={weapon_l2 && weapon_l2?.image_url}
          category={weapon_l2?.weapon_name ? weapon_l2?.weapon_name : 'Empty'}
          styles={style.item}
          onClick={() => moveToWeapon('left_hand', 'Left hand 2','weapon_l2')}
        />
        <CategoryButtonItem
          icon={!weapon_r3 && 'right_hand'}
          image_url={weapon_r3 && weapon_r3?.image_url}
          category={weapon_r3?.weapon_name ? weapon_r3?.weapon_name : 'Empty'}
          styles={style.item}
          onClick={() => moveToWeapon('right_hand', 'Right hand 3','weapon_r3')}
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
