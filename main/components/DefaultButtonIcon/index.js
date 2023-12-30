import React from 'react';
import { Pressable, View, Image } from 'react-native';
import style from './DefaultButtonIcon.sass'
import icons from '../../constantData/icons';

export default function DefaultButtonIcon({ onClick, icon, size }) {

    iconSelect = name => {
        if (name === null) {
            return icons.empty;
        }
        return icons[name];
    };

    return (
        <Pressable
            style={[style.button, , { width: size, height: size }]}
            onPress={onClick && onClick}
        >
            <View style={[style.image_container, { width: size, height: size }]}>
                <Image style={[style.image, { width: size-2, height: size-2 }]} source={iconSelect(icon)} />
            </View>
        </Pressable>
    );
}