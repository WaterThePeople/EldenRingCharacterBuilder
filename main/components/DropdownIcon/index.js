import React from 'react';
import { View, Image } from 'react-native';
import style from './DropdownIcon.module.sass';

export default function DropdownIcon(rotate) {
    return (
        <View style={style.container}>
            <Image
                style={rotate ? style.icon_rotate : style.icon}
                source={require('../../../images/Arrow.png')}
                resizeMode="center"
            />
        </View>
    );
}