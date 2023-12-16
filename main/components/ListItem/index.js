import React from 'react';
import { View, Image, Pressable } from 'react-native';
import style from './ListItem.sass';
import DefaultText from '../DefaultText';
import icons from '../../constantData/icons';

export default function ListItem({ name, image_url, onClick, isCurrent, isTaken }) {

    iconSelect = (name) => {
        if (name === null) {
            return icons.empty
        }
        return icons[name]
    }

    return (
        <Pressable style={[style.container, isCurrent && style.current, isTaken && style.taken]} onPress={() => onClick()}>
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
                {name}
            </DefaultText>
        </Pressable>
    );
}