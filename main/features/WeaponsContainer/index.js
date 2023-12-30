import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './WeaponsContainer.sass';
import SummaryItem from '../../components/SummaryItem';
import DefaultText from '../../components/DefaultText';
import { useNavigation } from '@react-navigation/native';

export default function WeaponsContainer({ data, containerStyle }) {

  const navigation = useNavigation();

  const [weapon_r1, setWeapon_r1] = useState('');
  const [weapon_r2, setWeapon_r2] = useState('');
  const [weapon_r3, setWeapon_r3] = useState('');
  const [weapon_l1, setWeapon_l1] = useState('');
  const [weapon_l2, setWeapon_l2] = useState('');
  const [weapon_l3, setWeapon_l3] = useState('');

  useEffect(() => {
    setWeapon_r1(data?.weapon_r1);
    setWeapon_r2(data?.weapon_r2);
    setWeapon_r3(data?.weapon_r3);
    setWeapon_l1(data?.weapon_l1);
    setWeapon_l2(data?.weapon_l2);
    setWeapon_l3(data?.weapon_l3);
  }, [data]);

  const moveToWeaponDetail = (weapon) => {
    navigation.navigate('WeaponDetail',
      {
        weapon: weapon,
        hand: 'hand',
        save_id: 'save_id',
      })
  };

  return (
    <View style={[style.container, containerStyle]}>
      <View style={style.title}>
        <DefaultText>
          Weapons
        </DefaultText>
      </View>
      <View style={[style.items_container, { flex: 1 }]}>
        <View style={style.item_row}>
          <SummaryItem
            image_url={weapon_r1 && weapon_r1?.image_url}
            onClick={() => weapon_r1 && moveToWeaponDetail(weapon_r1)}
          />
          <SummaryItem
            image_url={weapon_l1 && weapon_l1?.image_url}
            onClick={() => weapon_l1 && moveToWeaponDetail(weapon_l1)}
          />
        </View>
        <View style={style.item_row}>
          <SummaryItem
            image_url={weapon_r2 && weapon_r2?.image_url}
            onClick={() => weapon_r2 && moveToWeaponDetail(weapon_r2)}
          />
          <SummaryItem
            image_url={weapon_l2 && weapon_l2?.image_url}
            onClick={() => weapon_l2 && moveToWeaponDetail(weapon_l2)}
          />
        </View>
        <View style={style.item_row}>
          <SummaryItem
            image_url={weapon_r3 && weapon_r3?.image_url}
            onClick={() => weapon_r3 && moveToWeaponDetail(weapon_r3)}
          />
          <SummaryItem
            image_url={weapon_l3 && weapon_l3?.image_url}
            onClick={() => weapon_l3 && moveToWeaponDetail(weapon_l3)}
          />
        </View>
      </View>
    </View>
  );
}