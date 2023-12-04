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
import { getData, selectClass } from '../../../firebase';

export default function ClassPage({ route, navigation }) {

  const { save_id, save_class } = route.params;

  const [classesData, setClassesData] = useState([])
  const [classesList, setClassesList] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentClass, setCurrentClass] = useState('');

  const selectClassButton = () => {
    selectClass(save_id, currentClass);
    navigation.goBack();
  };

  useEffect(() => {
    getData('classes', setClassesData)
  }, []);

  useEffect(() => {
    if (save_class) {
      setCurrentClass(save_class)
    }
  }, [save_class]);

  useEffect(() => {
    setClassesList(classesData?.data?.map(a => a.class_name))
  }, [classesData]);

  return (
    <View style={style.container}>
      <View style={style.title_container}>
        <GoBackButton goBackFunction={() => navigation.goBack()} />
        <SelectDropdown
          data={classesList}
          onSelect={(selectedItem, index) => {
            setCurrentClass(classesData?.data?.[index]);
          }}
          buttonStyle={[style.dropdown_button, { width: Dimensions.get('window').width - 90 }]}
          buttonTextStyle={style.dropdown_button_text}
          dropdownStyle={style.dropdown}
          defaultButtonText={currentClass?.class_name ? currentClass?.class_name : "Class name"}
          rowStyle={style.dropdown_row}
          rowTextStyle={style.dropdown_row_text}
          statusBarTranslucent={true}
          renderDropdownIcon={() => DropdownIcon(isDropdownOpen)}
          dropdownOverlayColor={'none'}
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={() => setIsDropdownOpen(false)}
        />
      </View>
      <CardScroll container_style={style.card_container} style={style.card}>
        <ClassStatInfo
          stat={'Level'}
          value={currentClass ? currentClass.class_level : '0'}
        />
        <View style={style.tip_container}>
          <DefaultText style={style.tip_text}>Stat</DefaultText>
          <DefaultText style={style.tip_text}>Initial amount</DefaultText>
        </View>
        <ClassStatInfo
          stat={'Vigor'}
          value={currentClass ? currentClass.class_vigor : '0'}
        />
        <ClassStatInfo
          stat={'Mind'}
          value={currentClass ? currentClass.class_mind : '0'}
        />
        <ClassStatInfo
          stat={'Endurance'}
          value={currentClass ? currentClass.class_endurance : '0'}
        />
        <ClassStatInfo
          stat={'Strength'}
          value={currentClass ? currentClass.class_strength : '0'}
        />
        <ClassStatInfo
          stat={'Dexterity'}
          value={currentClass ? currentClass.class_dexterity : '0'}
        />
        <ClassStatInfo
          stat={'Intelligence'}
          value={currentClass ? currentClass.class_intelligence : '0'}
        />
        <ClassStatInfo
          stat={'Faith'}
          value={currentClass ? currentClass.class_faith : '0'}
        />
        <ClassStatInfo
          stat={'Arcane'}
          value={currentClass ? currentClass.class_arcane : '0'}
        />
      </CardScroll>
      <DefaultButton
        styles={style.confirm_button}
        label={'Select class'}
        onClick={() =>
          selectClassButton('BuildSelectionScreen')
        }
      />
    </View>
  );
}
