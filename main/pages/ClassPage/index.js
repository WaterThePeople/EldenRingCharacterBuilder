import React, { useState } from 'react';
import { View } from 'react-native';
import style from './ClassPage.sass';
import Card from '../../components/Card';
import SelectDropdown from 'react-native-select-dropdown';
import DropdownIcon from '../../components/DropdownIcon';
import classes from '../../constantData/classes';
import ClassStatInfo from '../../components/ClassStatInfo';
import DefaultText from '../../components/DefaultText';

export default function ClassPage({ route, navigation }) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [currentClass, setCurrentClass] = useState('')

    const classesList = classes.map(a => a.name);

    return (
        <View style={style.container}>
            <SelectDropdown
                data={classesList}
                onSelect={(selectedItem, index) => { setCurrentClass(classes[index]) }}
                buttonStyle={style.dropdown_button}
                buttonTextStyle={style.dropdown_button_text}
                dropdownStyle={style.dropdown}
                defaultButtonText='Class name'
                rowStyle={style.dropdown_row}
                rowTextStyle={style.dropdown_row_text}
                statusBarTranslucent={true}
                renderDropdownIcon={() => DropdownIcon(isDropdownOpen)}
                dropdownOverlayColor={'none'}
                onFocus={() => setIsDropdownOpen(true)}
                onBlur={() => setIsDropdownOpen(false)}
            />
            <Card style={style.card}>
                <ClassStatInfo stat={'Level'} value={currentClass ? currentClass.level : '0'} />
                <View style={style.tip_container}>
                    <DefaultText style={style.tip_text}>Stat</DefaultText>
                    <DefaultText style={style.tip_text}>Initial amount</DefaultText>
                </View>
                <ClassStatInfo stat={'Vigor'} value={currentClass ? currentClass.vigor : '0'} />
                <ClassStatInfo stat={'Mind'} value={currentClass ? currentClass.mind : '0'} />
                <ClassStatInfo stat={'Endurance'} value={currentClass ? currentClass.endurance : '0'} />
                <ClassStatInfo stat={'Strength'} value={currentClass ? currentClass.strength : '0'} />
                <ClassStatInfo stat={'Dexterity'} value={currentClass ? currentClass.dexterity : '0'} />
                <ClassStatInfo stat={'Intelligence'} value={currentClass ? currentClass.intelligence : '0'} />
                <ClassStatInfo stat={'Faith'} value={currentClass ? currentClass.faith : '0'} />
                <ClassStatInfo stat={'Arcane'} value={currentClass ? currentClass.arcane : '0'} />
            </Card>
        </View>
    );
}