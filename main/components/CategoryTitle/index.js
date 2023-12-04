import React from 'react';
import { View, Image } from 'react-native';
import style from './CategoryTitle.sass';
import DefaultText from '../DefaultText';
import { Dimensions } from 'react-native';
import icons from '../../constantData/icons';

export default function CategoryTitle({ name, icon, goBackButtonExist }) {

    iconSelect = (name) => {
        if (name === null) {
            return icons.empty
        }
        return icons[name]
    }

    return (
        <View style={[style.title,
        { width: goBackButtonExist ? Dimensions.get('window').width - 90 : Dimensions.get('window').width - 40 }]}>
            <Image
                style={style.icon}
                source={iconSelect(icon)}
            />
            <DefaultText style={style.title_text} autoFont={true}>{name}</DefaultText>
        </View>
    );
}