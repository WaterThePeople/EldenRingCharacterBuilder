import React from 'react';
import { Pressable, Image } from 'react-native';
import style from './CategoryButton.sass';
import DefaultText from '../DefaultText';
import icons from '../../constantData/icons';

export default function CategoryButton({ styles, category, icon, onClick }) {

    iconSelect = (name) => {
        if (name === null) {
            return icons.empty
        }
        return icons[name]
    }

    return (
        <Pressable
            style={[style.button, styles]}
            onPress={onClick}
        >
            <Image
                style={style.icon}
                source={iconSelect(icon)}
            />
            <DefaultText style={style.text} autoFont>{category}</DefaultText>
        </Pressable>
    );
}