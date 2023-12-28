import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './ClassPage.sass';
import SelectDropdown from 'react-native-select-dropdown';
import DropdownIcon from '../../components/DropdownIcon';
import ClassStatInfo from '../../components/ClassStatInfo';
import DefaultText from '../../components/DefaultText';
import DefaultButton from '../../components/DefaultButton';
import CardScroll from '../../components/CardScroll';
import GoBackButton from '../../components/GoBackButton';
import { Dimensions } from 'react-native';
import { getData, selectClass, getCurrentClass } from '../../../firebase';
import Loader from '../../components/Loader';
import Card from '../../components/Card';
import Stat from '../../components/Stat';
import colors from '../../constantData/colors';
import {
  calculate_hp,
  calculate_fp,
  calculate_stamina,
  calculate_equip_load,
  calculate_discovery,
  calculate_physical_defense,
  calculate_magical_defense,
  calculate_fire_defense,
  calculate_lightning_defense,
  calculate_holy_defense,
  calculate_immunity,
  calculate_robustness,
  calculate_focus,
  calculate_vitality,
} from '../../constantData/statsEquations';

export default function ClassPage({ route, navigation }) {
  const { save_id } = route.params;

  const [isLoading, setIsLoading] = useState(false);

  const [classesData, setClassesData] = useState([]);
  const [classesList, setClassesList] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentClass, setCurrentClass] = useState('');
  const [currentStats, setCurrentStats] = useState('');

  const [level, setLevel] = useState('');
  const [vigor, setVigor] = useState('');
  const [mind, setMind] = useState('');
  const [endurance, setEndurance] = useState('');
  const [strength, setStrength] = useState('');
  const [dexterity, setDexterity] = useState('');
  const [faith, setFaith] = useState('');
  const [intelligence, setIntelligence] = useState('');
  const [arcane, setArcane] = useState('');

  const [HP, setHP] = useState('');
  const [FP, setFP] = useState('');
  const [stamina, setStamina] = useState('');
  const [equipLoad, setEquipLoad] = useState('');
  const [discovery, setDiscovery] = useState('');
  const [physicalDefense, setPhysicalDefense] = useState('')
  const [magicalDefense, setMagicalDefense] = useState('')
  const [fireDefense, setFireDefense] = useState('')
  const [lightningDefense, setLightningDefense] = useState('')
  const [holyDefense, setHolyDefense] = useState('')
  const [immunity, setImmunity] = useState('')
  const [robustness, setRobustness] = useState('')
  const [focus, setFocus] = useState('')
  const [vitality, setVitality] = useState('')

  const selectClassButton = () => {
    const temp = {
      level: level,
      vigor: vigor,
      mind: mind,
      endurance: endurance,
      strength: strength,
      dexterity: dexterity,
      faith: faith,
      intelligence: intelligence,
      arcane: arcane,
    };
    selectClass(save_id, currentClass, temp);
    navigation.goBack();
  };

  const getCurrentClassData = async () => {
    let temp = await getCurrentClass(save_id);
    setCurrentClass(temp?.class);
    setCurrentStats(temp?.stats);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getData('classes', setClassesData);
    getCurrentClassData();
  }, []);

  useEffect(() => {
    setClassesList(classesData?.data?.map(a => a.class_name));
  }, [classesData]);

  const calculateLevel = () => {
    let temp =
      parseInt(currentClass?.class_level) +
      (parseInt(vigor) - parseInt(currentClass?.class_vigor)) +
      (parseInt(mind) - parseInt(currentClass?.class_mind)) +
      (parseInt(endurance) - parseInt(currentClass?.class_endurance)) +
      (parseInt(strength) - parseInt(currentClass?.class_strength)) +
      (parseInt(dexterity) - parseInt(currentClass?.class_dexterity)) +
      (parseInt(faith) - parseInt(currentClass?.class_faith)) +
      (parseInt(intelligence) - parseInt(currentClass?.class_intelligence)) +
      (parseInt(arcane) - parseInt(currentClass?.class_arcane));

    setLevel(temp);
  };

  const onPlus = (stat, setStat, class_stat) => {
    let temp = parseInt(stat) + 1;
    if (temp < 100 && temp >= parseInt(class_stat)) {
      setStat(temp);
    }
  };

  const onMinus = (stat, setStat, class_stat) => {
    let temp = parseInt(stat) - 1;
    if (temp < 100 && temp >= parseInt(class_stat)) {
      setStat(temp);
    }
  };

  const changeCurrentClass = item => {
    setLevel(item?.class_level);
    setVigor(item?.class_vigor);
    setMind(item?.class_mind);
    setEndurance(item?.class_endurance);
    setStrength(item?.class_strength);
    setDexterity(item?.class_dexterity);
    setFaith(item?.class_faith);
    setIntelligence(item?.class_intelligence);
    setArcane(item?.class_arcane);

    const temp = {
      level: item?.class_level,
      vigor: item?.class_vigor,
      mind: item?.class_mind,
      endurance: item?.class_endurance,
      strength: item?.class_strength,
      dexterity: item?.class_dexterity,
      faith: item?.class_faith,
      intelligence: item?.class_intelligence,
      arcane: item?.class_arcane,
    };

    setCurrentClass(item);
    setCurrentStats(temp);
  };

  useEffect(() => {
    calculateLevel();
  }, [
    vigor,
    mind,
    endurance,
    strength,
    dexterity,
    faith,
    intelligence,
    arcane,
  ]);

  useEffect(() => {
    setLevel(currentStats?.level);
    setVigor(currentStats?.vigor);
    setMind(currentStats?.mind);
    setEndurance(currentStats?.endurance);
    setStrength(currentStats?.strength);
    setDexterity(currentStats?.dexterity);
    setFaith(currentStats?.faith);
    setIntelligence(currentStats?.intelligence);
    setArcane(currentStats?.arcane);
  }, [currentStats]);

  useEffect(() => {
    setHP(calculate_hp(parseInt(vigor)));
  }, [vigor]);

  useEffect(() => {
    setFP(calculate_fp(parseInt(mind)));
  }, [mind]);

  useEffect(() => {
    setStamina(calculate_stamina(parseInt(endurance)));
  }, [endurance]);

  useEffect(() => {
    setEquipLoad(calculate_equip_load(parseInt(endurance)));
  }, [endurance]);

  useEffect(() => {
    setDiscovery(calculate_discovery(parseInt(arcane)));
  }, [arcane]);

  useEffect(() => {
    setPhysicalDefense(calculate_physical_defense(parseInt(level), parseInt(strength)));
  }, [level, strength]);

  useEffect(() => {
    setMagicalDefense(calculate_magical_defense(parseInt(level), parseInt(intelligence)));
  }, [level, intelligence]);

  useEffect(() => {
    setFireDefense(calculate_fire_defense(parseInt(level), parseInt(vigor)));
  }, [level, vigor]);

  useEffect(() => {
    setLightningDefense(calculate_lightning_defense(parseInt(level)));
  }, [level]);

  useEffect(() => {
    setHolyDefense(calculate_holy_defense(parseInt(level), parseInt(arcane)));
  }, [level, arcane]);

  useEffect(() => {
    setImmunity(calculate_immunity(parseInt(level), parseInt(vigor)));
  }, [level, vigor]);

  useEffect(() => {
    setRobustness(calculate_robustness(parseInt(level), parseInt(endurance)));
  }, [level, endurance]);

  useEffect(() => {
    setFocus(calculate_focus(parseInt(level), parseInt(mind)));
  }, [level, mind]);

  useEffect(() => {
    setVitality(calculate_vitality(parseInt(level), parseInt(arcane)));
  }, [level, arcane]);

  return (
    <>
      <View style={style.container}>
        <View style={style.title_container}>
          <GoBackButton goBackFunction={() => navigation.goBack()} />
          {isLoading ? (
            <Card style={style.card_loading}>
              <Loader size={50} />
            </Card>
          ) : (
            <SelectDropdown
              data={classesList}
              onSelect={(selectedItem, index) => {
                changeCurrentClass(classesData?.data?.[index]);
              }}
              buttonStyle={[
                style.dropdown_button,
                { width: Dimensions.get('window').width - 90 },
              ]}
              buttonTextStyle={style.dropdown_button_text}
              dropdownStyle={style.dropdown}
              defaultButtonText={
                currentClass?.class_name ? currentClass?.class_name : ''
              }
              rowStyle={style.dropdown_row}
              rowTextStyle={style.dropdown_row_text}
              statusBarTranslucent={true}
              renderDropdownIcon={() => DropdownIcon(isDropdownOpen)}
              dropdownOverlayColor={'none'}
              onFocus={() => setIsDropdownOpen(true)}
              onBlur={() => setIsDropdownOpen(false)}
            />
          )}
        </View>
        {!isLoading ? (
          <CardScroll container_style={[style.card_container]} style={style.card}>
            <ClassStatInfo
              stat={'Level'}
              value={currentClass ? currentClass?.class_level : '0'}
              totalValue={currentStats ? level : '0'}
            />
            <View style={style.tip_container}>
              <DefaultText style={style.tip_text}>Stat</DefaultText>
              <DefaultText style={style.tip_text_initial}>Initial</DefaultText>
              <DefaultText style={style.tip_text_total}>Total</DefaultText>
            </View>
            <ClassStatInfo
              stat={'Vigor'}
              value={currentClass ? currentClass?.class_vigor : '0'}
              totalValue={currentStats ? vigor : '0'}
              onPlus={() => onPlus(vigor, setVigor, currentClass?.class_vigor)}
              onMinus={() => onMinus(vigor, setVigor, currentClass?.class_vigor)}
              onNumberInput={setVigor}
            />
            <ClassStatInfo
              stat={'Mind'}
              value={currentClass ? currentClass?.class_mind : '0'}
              totalValue={currentClass ? mind : '0'}
              onPlus={() => onPlus(mind, setMind, currentClass?.class_mind)}
              onMinus={() => onMinus(mind, setMind, currentClass?.class_mind)}
              onNumberInput={setMind}
            />
            <ClassStatInfo
              stat={'Endurance'}
              value={currentClass ? currentClass?.class_endurance : '0'}
              totalValue={currentStats ? endurance : '0'}
              onPlus={() =>
                onPlus(endurance, setEndurance, currentClass?.class_endurance)
              }
              onMinus={() =>
                onMinus(endurance, setEndurance, currentClass?.class_endurance)
              }
              onNumberInput={setEndurance}
            />
            <ClassStatInfo
              stat={'Strength'}
              value={currentClass ? currentClass?.class_strength : '0'}
              totalValue={currentStats ? strength : '0'}
              onPlus={() =>
                onPlus(strength, setStrength, currentClass?.class_strength)
              }
              onMinus={() =>
                onMinus(strength, setStrength, currentClass?.class_strength)
              }
              onNumberInput={setStrength}
            />
            <ClassStatInfo
              stat={'Dexterity'}
              value={currentClass ? currentClass?.class_dexterity : '0'}
              totalValue={currentStats ? dexterity : '0'}
              onPlus={() =>
                onPlus(dexterity, setDexterity, currentClass?.class_dexterity)
              }
              onMinus={() =>
                onMinus(dexterity, setDexterity, currentClass?.class_dexterity)
              }
              onNumberInput={setDexterity}
            />
            <ClassStatInfo
              stat={'Intelligence'}
              value={currentClass ? currentClass?.class_intelligence : '0'}
              totalValue={currentStats ? intelligence : '0'}
              onPlus={() =>onPlus(intelligence,setIntelligence,currentClass?.class_intelligence)}
              onMinus={() =>onMinus(intelligence,setIntelligence,currentClass?.class_intelligence)}
              onNumberInput={setIntelligence}
            />
            <ClassStatInfo
              stat={'Faith'}
              value={currentClass ? currentClass?.class_faith : '0'}
              totalValue={currentStats ? faith : '0'}
              onPlus={() => onPlus(faith, setFaith, currentClass?.class_faith)}
              onMinus={() => onMinus(faith, setFaith, currentClass?.class_faith)}
              onNumberInput={setFaith}
            />
            <ClassStatInfo
              stat={'Arcane'}
              value={currentClass ? currentClass?.class_arcane : '0'}
              totalValue={currentStats ? arcane : '0'}
              onPlus={() => onPlus(arcane, setArcane, currentClass?.class_arcane)}
              onMinus={() =>
                onMinus(arcane, setArcane, currentClass?.class_arcane)
              }
              onNumberInput={setArcane}
            />
            <DefaultText style={style.general_stats} color={'#b79e1f'}>GENERAL STATS</DefaultText>
            <View style={style.stats_container}>
              <Stat
                value={HP}
                text={'HP'}
                color={colors.red}
                containerStyle={[
                  style.stat,
                  { width: (Dimensions.get('window').width - 90) / 2 },
                ]}
                textStyle={style.stat_text}
              />
              <Stat
                value={equipLoad}
                text={'Equip load'}
                color={colors.light_brown}
                containerStyle={[
                  style.stat,
                  { width: (Dimensions.get('window').width - 90) / 2 },
                ]}
                textStyle={style.stat_text}
              />
              <Stat
                value={FP}
                text={'FP'}
                color={colors.blue}
                containerStyle={[
                  style.stat,
                  { width: (Dimensions.get('window').width - 90) / 2 },
                ]}
                textStyle={style.stat_text}
              />
              <Stat
                value={discovery}
                text={'Discovery'}
                color={colors.light_pink}
                containerStyle={[
                  style.stat,
                  { width: (Dimensions.get('window').width - 90) / 2 },
                ]}
                textStyle={style.stat_text}
              />
              <Stat
                value={stamina}
                text={'Stamina'}
                color={colors.green}
                containerStyle={[
                  style.stat,
                  { width: (Dimensions.get('window').width - 90) / 2 },
                ]}
                textStyle={style.stat_text}
              />
            </View>
            <View style={[style.defense_and_restitance_container]}>
              <View style={style.defense_container}>
                <DefaultText style={[style.general_stats, { width: (Dimensions.get('window').width - 90) / 2 }]} color={'#b79e1f'}>DEFENSE</DefaultText>
                <Stat
                  value={physicalDefense}
                  text={'Physical'}
                  containerStyle={[
                    style.stat,
                    { width: (Dimensions.get('window').width - 90) / 2 },
                  ]}
                  textStyle={style.stat_text}
                />
                <Stat
                  value={physicalDefense}
                  text={'vs Strike'}
                  containerStyle={[
                    style.stat,
                    { width: (Dimensions.get('window').width - 90) / 2 },
                  ]}
                  textStyle={style.stat_text}
                />
                <Stat
                  value={physicalDefense}
                  text={'vs Slash'}
                  containerStyle={[
                    style.stat,
                    { width: (Dimensions.get('window').width - 90) / 2 },
                  ]}
                  textStyle={style.stat_text}
                />
                <Stat
                  value={physicalDefense}
                  text={'vs Pierce'}
                  containerStyle={[
                    style.stat,
                    { width: (Dimensions.get('window').width - 90) / 2 },
                  ]}
                  textStyle={style.stat_text}
                />
                <Stat
                  value={magicalDefense}
                  text={'Magical'}
                  color={colors.light_blue}
                  containerStyle={[
                    style.stat,
                    { width: (Dimensions.get('window').width - 90) / 2 },
                  ]}
                  textStyle={style.stat_text}
                />
                <Stat
                  value={fireDefense}
                  text={'Fire'}
                  color={colors.orange}
                  containerStyle={[
                    style.stat,
                    { width: (Dimensions.get('window').width - 90) / 2 },
                  ]}
                  textStyle={style.stat_text}
                />
                <Stat
                  value={lightningDefense}
                  text={'Lightning'}
                  color={colors.yellow}
                  containerStyle={[
                    style.stat,
                    { width: (Dimensions.get('window').width - 90) / 2 },
                  ]}
                  textStyle={style.stat_text}
                />
                <Stat
                  value={holyDefense}
                  text={'Holy'}
                  color={colors.light_yellow}
                  containerStyle={[
                    style.stat,
                    { width: (Dimensions.get('window').width - 90) / 2 },
                  ]}
                  textStyle={style.stat_text}
                />
              </View>
              <View style={style.resistance_container}>
                <DefaultText style={[style.general_stats, { width: (Dimensions.get('window').width - 90) / 2 }]} color={'#b79e1f'}>RESISTANCE</DefaultText>
                <Stat
                  value={immunity}
                  text={'Immunity'}
                  color={colors.gold}
                  containerStyle={[
                    style.stat,
                    { width: (Dimensions.get('window').width - 90) / 2 },
                  ]}
                  textStyle={style.stat_text}
                />
                <Stat
                  value={robustness}
                  text={'Robustness'}
                  color={colors.gold}
                  containerStyle={[
                    style.stat,
                    { width: (Dimensions.get('window').width - 90) / 2 },
                  ]}
                  textStyle={style.stat_text}
                />
                <Stat
                  value={focus}
                  text={'Focus'}
                  color={colors.gold}
                  containerStyle={[
                    style.stat,
                    { width: (Dimensions.get('window').width - 90) / 2 },
                  ]}
                  textStyle={style.stat_text}
                />
                <Stat
                  value={vitality}
                  text={'Vitality'}
                  color={colors.gold}
                  containerStyle={[
                    style.stat,
                    { width: (Dimensions.get('window').width - 90) / 2 },
                  ]}
                  textStyle={style.stat_text}
                />
              </View>
            </View>
          </CardScroll>
        ) : (
          <Card style={style.card_class_loading}>
            <Loader />
          </Card>
        )}
        <DefaultButton
          styles={style.confirm_button}
          label={'Save changes'}
          onClick={() => !isLoading && selectClassButton('BuildSelectionScreen')}
        />
      </View>
    </>
  );
}
