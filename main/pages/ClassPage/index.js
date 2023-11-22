import React from 'react';
import { View } from 'react-native';
import style from './ClassPage.sass';
import Card from '../../components/Card';
import SelectDropdown from 'react-native-select-dropdown';

export default function ClassPage({ route, navigation }) {

    const classes =
        [
            'Wretch',
            'Hero',
            'Bandit',
            'Astrologer',
            'Warrior',
            'Prisoner',
            'Confessor',
            'Vagabond',
            'Prophet',
            'Samurai',
        ]

    return (
        <View style={style.container}>
            <SelectDropdown
                data={classes}
                onSelect={(selectedItem, index) => { console.log(selectedItem, index) }}
                buttonStyle={style.dropdown_button}
                buttonTextStyle={style.dropdown_button_text}
                dropdownStyle={style.dropdown}
                defaultButtonText='Class name'
                rowStyle={style.dropdown_row}
                rowTextStyle={style.dropdown_row_text}
                statusBarTranslucent={true}
                dropdownOverlayColor={false}
            />
            <Card style={style.card}>

            </Card>
        </View>
    );
}