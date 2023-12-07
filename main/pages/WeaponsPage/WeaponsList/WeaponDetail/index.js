import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import style from './WeaponDetail.sass';
import GoBackButton from '../../../../components/GoBackButton';
import Title from '../../../../components/Title';
import CardScroll from '../../../../components/CardScroll';
import DefaultText from '../../../../components/DefaultText';
import DefaultButton from '../../../../components/DefaultButton';
import {selectWeapon} from '../../../../../firebase';

export default function WeaponDetail({route, navigation}) {
  const {weapon, hand, save_id} = route.params;

  const checkIfPassiveEmpty = () => {
    if (weapon?.weapon_bleed > 0) return false;
    if (weapon?.weapon_poison > 0) return false;
    if (weapon?.weapon_frostbite > 0) return false;
    if (weapon?.weapon_sleep > 0) return false;
    if (weapon?.weapon_madness > 0) return false;
    if (weapon?.weapon_scarlet_rot > 0) return false;
    return true;
  };

  const confirmWeapon = () => {
    selectWeapon(save_id, hand, weapon);
    navigation.pop(2);
  };


  return (
    <View style={style.container}>
      <View style={style.title_container}>
        <GoBackButton goBackFunction={() => navigation.goBack()} />
        <Title
          goBackButtonExist
          name={weapon?.weapon_name}
          textAlignLeft={true}
        />
      </View>
      <CardScroll container_style={style.card_container} style={style.card}>
        <View style={style.image_container}>
          <Image
            style={style.image}
            source={{
              uri: weapon?.image_url,
            }}
          />
        </View>
        <View style={[style.stats_info, {flex: 1}]}>
          <View style={style.left}>
            <DefaultText style={style.text}>Attack</DefaultText>
            <View style={style.left_stats}>
              <View style={style.text_color_container}>
                <DefaultText style={style.text}>Phy</DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.weapon_phy_damage}
                </DefaultText>
              </View>
              <View style={style.text_color_container}>
                <DefaultText style={style.text} color={'#24ADCB'}>
                  Magical
                </DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.weapon_mag_damage}
                </DefaultText>
              </View>
              <View style={style.text_color_container}>
                <DefaultText style={style.text} color={'#DC700C'}>
                  Fire
                </DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.weapon_fire_damage}
                </DefaultText>
              </View>
              <View style={style.text_color_container}>
                <DefaultText style={style.text} color={'#EFDF4D'}>
                  Lightning
                </DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.weapon_ligt_damage}
                </DefaultText>
              </View>
              <View style={style.text_color_container}>
                <DefaultText style={style.text} color={'#F9C234'}>
                  Holy
                </DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.weapon_holy_damage}
                </DefaultText>
              </View>
              <View style={style.text_color_container}>
                <DefaultText style={style.text} color={'#FF0101'}>
                  Critikal
                </DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.weapon_crit}
                </DefaultText>
              </View>
              {weapon?.weapon_range > 0 && (
                <View style={style.text_color_container}>
                  <DefaultText style={style.text} color={'#009933'}>
                    Range
                  </DefaultText>
                  <DefaultText style={style.text}>
                    {weapon?.weapon_range}
                  </DefaultText>
                </View>
              )}
            </View>
          </View>
          <View style={style.right}>
            <DefaultText style={style.text}>Guard</DefaultText>
            <View style={[style.right_stats]}>
              <View style={style.text_color_container}>
                <DefaultText style={style.text}>Phy</DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.phy_reduction}
                </DefaultText>
              </View>
              <View style={style.text_color_container}>
                <DefaultText style={style.text} color={'#24ADCB'}>
                  Magical
                </DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.mag_reduction}
                </DefaultText>
              </View>
              <View style={style.text_color_container}>
                <DefaultText style={style.text} color={'#DC700C'}>
                  Fire
                </DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.fire_reduction}
                </DefaultText>
              </View>
              <View style={style.text_color_container}>
                <DefaultText style={style.text} color={'#EFDF4D'}>
                  Lightning
                </DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.ligt_reduction}
                </DefaultText>
              </View>
              <View style={style.text_color_container}>
                <DefaultText style={style.text} color={'#F9C234'}>
                  Holy
                </DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.holy_reduction}
                </DefaultText>
              </View>
              <View style={style.text_color_container}>
                <DefaultText style={style.text} color={'#8a66d9'}>
                  Guard
                </DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.guard_boost}
                </DefaultText>
              </View>
            </View>
          </View>
        </View>

        <View style={[style.scaling_info, {flex: 1}]}>
          <View style={style.left}>
            <DefaultText style={style.text}>Scaling</DefaultText>
            <View style={[style.left_stats]}>
              {weapon?.weapon_str_scaling !== '-' && (
                <View style={style.text_color_container}>
                  <DefaultText style={style.text} color={'#978563'}>
                    Strength
                  </DefaultText>
                  <DefaultText style={style.text}>
                    {weapon?.weapon_str_scaling}
                  </DefaultText>
                </View>
              )}
              {weapon?.weapon_dex_scaling !== '-' && (
                <View style={style.text_color_container}>
                  <DefaultText style={style.text} color={'#978563'}>
                    Dexterity
                  </DefaultText>
                  <DefaultText style={style.text}>
                    {weapon?.weapon_dex_scaling}
                  </DefaultText>
                </View>
              )}
              {weapon?.weapon_fth_scaling !== '-' && (
                <View style={style.text_color_container}>
                  <DefaultText style={style.text} color={'#978563'}>
                    Faith
                  </DefaultText>
                  <DefaultText style={style.text}>
                    {weapon?.weapon_fth_scaling}
                  </DefaultText>
                </View>
              )}
              {weapon?.weapon_int_scaling !== '-' && (
                <View style={style.text_color_container}>
                  <DefaultText style={style.text} color={'#978563'}>
                    Intelligence
                  </DefaultText>
                  <DefaultText style={style.text}>
                    {weapon?.weapon_int_scaling}
                  </DefaultText>
                </View>
              )}
              {weapon?.weapon_arc_scaling !== '-' && (
                <View style={style.text_color_container}>
                  <DefaultText style={style.text} color={'#978563'}>
                    Arcane
                  </DefaultText>
                  <DefaultText style={style.text}>
                    {weapon?.weapon_arc_scaling}
                  </DefaultText>
                </View>
              )}
            </View>
          </View>
          <View style={style.right}>
            <DefaultText style={style.text}>Requires</DefaultText>
            <View style={[style.right_stats]}>
              {weapon?.weapon_str_req > 0 && (
                <View style={style.text_color_container}>
                  <DefaultText style={style.text} color={'#978563'}>
                    Strength
                  </DefaultText>
                  <DefaultText style={style.text}>
                    {weapon?.weapon_str_req}
                  </DefaultText>
                </View>
              )}
              {weapon?.weapon_dex_req > 0 && (
                <View style={style.text_color_container}>
                  <DefaultText style={style.text} color={'#978563'}>
                    Dexterity
                  </DefaultText>
                  <DefaultText style={style.text}>
                    {weapon?.weapon_dex_req}
                  </DefaultText>
                </View>
              )}
              {weapon?.weapon_fth_req > 0 && (
                <View style={style.text_color_container}>
                  <DefaultText style={style.text} color={'#978563'}>
                    Faith
                  </DefaultText>
                  <DefaultText style={style.text}>
                    {weapon?.weapon_fth_req}
                  </DefaultText>
                </View>
              )}
              {weapon?.weapon_int_req > 0 && (
                <View style={style.text_color_container}>
                  <DefaultText style={style.text} color={'#978563'}>
                    Intelligence
                  </DefaultText>
                  <DefaultText style={style.text}>
                    {weapon?.weapon_int_req}
                  </DefaultText>
                </View>
              )}
              {weapon?.weapon_arc_req > 0 && (
                <View style={style.text_color_container}>
                  <DefaultText style={style.text} color={'#978563'}>
                    Arcane
                  </DefaultText>
                  <DefaultText style={style.text}>
                    {weapon?.weapon_arc_req}
                  </DefaultText>
                </View>
              )}
            </View>
          </View>
        </View>

        <View style={[style.type_info, {flex: 1}]}>
          <View style={style.left}>
            <View style={style.left_stats}>
              <View style={style.text_color_container}>
                <DefaultText
                  numberOfLines={0}
                  style={style.text}
                  color={'#978563'}>
                  {weapon?.weapon_type}
                </DefaultText>
              </View>
            </View>
          </View>
          <View style={style.right}>
            <View style={style.right_stats}>
              <View style={style.text_color_container}>
                <DefaultText
                  numberOfLines={0}
                  style={style.text}
                  color={'#978563'}>
                  {weapon?.damage_type}
                </DefaultText>
              </View>
            </View>
          </View>
        </View>

        <View style={[style.skill_info, {flex: 1}]}>
          <View style={style.left}>
            <View style={style.left_stats}>
              <View style={style.text_color_container}>
                <DefaultText
                  numberOfLines={0}
                  style={style.text}
                  color={'#978563'}>
                  {weapon?.weapon_skill}
                </DefaultText>
              </View>
            </View>
          </View>
          <View style={style.right}>
            <View style={style.right_stats}>
              <View style={style.text_color_container}>
                <DefaultText
                  numberOfLines={0}
                  style={style.text}
                  color={'#978563'}>
                  FP
                </DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.weapon_skill_fp_cost}
                </DefaultText>
              </View>
            </View>
          </View>
        </View>

        <View style={[style.passive_info, {flex: 1}]}>
          <View style={style.left}>
            <DefaultText style={style.text}>
              Passive {checkIfPassiveEmpty() && ': none'}
            </DefaultText>
            <View style={style.left_stats}>
              {weapon?.weapon_bleed > 0 && (
                <View style={style.text_color_container}>
                  <DefaultText
                    numberOfLines={0}
                    style={style.text}
                    color={'#FF0101'}>
                    Bleed
                  </DefaultText>
                  <DefaultText numberOfLines={0} style={style.text}>
                    {weapon?.weapon_bleed}
                  </DefaultText>
                </View>
              )}
              {weapon?.weapon_poison > 0 && (
                <View style={style.text_color_container}>
                  <DefaultText
                    numberOfLines={0}
                    style={style.text}
                    color={'#009933'}>
                    Poison
                  </DefaultText>
                  <DefaultText numberOfLines={0} style={style.text}>
                    {weapon?.weapon_poison}
                  </DefaultText>
                </View>
              )}
              {weapon?.weapon_frostbite > 0 && (
                <View style={style.text_color_container}>
                  <DefaultText
                    numberOfLines={0}
                    style={style.text}
                    color={'#0f63ff'}>
                    Frostbite
                  </DefaultText>
                  <DefaultText numberOfLines={0} style={style.text}>
                    {weapon?.weapon_frostbite}
                  </DefaultText>
                </View>
              )}
              {weapon?.weapon_sleep > 0 && (
                <View style={style.text_color_container}>
                  <DefaultText
                    numberOfLines={0}
                    style={style.text}
                    color={'#8a66d9'}>
                    Sleep
                  </DefaultText>
                  <DefaultText numberOfLines={0} style={style.text}>
                    {weapon?.weapon_sleep}
                  </DefaultText>
                </View>
              )}
              {weapon?.weapon_scarlet_rot > 0 && (
                <View style={style.text_color_container}>
                  <DefaultText
                    numberOfLines={0}
                    style={style.text}
                    color={'#9c545b'}>
                    Scarlet rot
                  </DefaultText>
                  <DefaultText numberOfLines={0} style={style.text}>
                    {weapon?.weapon_scarlet_rot}
                  </DefaultText>
                </View>
              )}
              {weapon?.weapon_madness > 0 && (
                <View style={style.text_color_container}>
                  <DefaultText
                    numberOfLines={0}
                    style={style.text}
                    color={'#ffaa00'}>
                    Madness
                  </DefaultText>
                  <DefaultText numberOfLines={0} style={style.text}>
                    {weapon?.weapon_madness}
                  </DefaultText>
                </View>
              )}
            </View>
          </View>
          <View style={style.right}>
            <View style={style.right_stats}>
              <View style={style.text_color_container}>
                <DefaultText
                  numberOfLines={0}
                  style={style.text}
                  color={'#978563'}>
                  Weight
                </DefaultText>
                <DefaultText style={style.text}>
                  {weapon?.weapon_weight}
                </DefaultText>
              </View>
            </View>
          </View>
        </View>
      </CardScroll>
      <DefaultButton
        styles={style.confirm_button}
        label={'Select weapon'}
        onClick={() => confirmWeapon()}
      />
    </View>
  );
}
