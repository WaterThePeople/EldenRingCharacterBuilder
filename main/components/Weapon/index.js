import React from 'react';
import { View, Image, Pressable } from 'react-native';
import style from './Weapon.sass';
import DefaultText from '../DefaultText';
import icons from '../../constantData/icons';

export default function Weapon({ weapon_name, image_url, onClick }) {

    iconSelect = (name) => {
        if (name === null) {
            return icons.empty
        }
        return icons[name]
    }

    return (
        <Pressable style={style.container} onPress={() => onClick()}>
            <View style={style.item_container}>
                <Image
                    style={style.icon}
                    source={{
                        uri: image_url,
                    }}
                />
                <Image
                    style={style.icon_empty}
                    source={iconSelect('empty')}
                />
            </View>
            <DefaultText>
                {weapon_name}
            </DefaultText>
        </Pressable>
    );
}