import React from 'react';
import { Pressable, Image, View } from 'react-native';
import style from './CategoryButtonItemHorizontal.sass';
import DefaultText from '../DefaultText';
import icons from '../../constantData/icons';
import { Dimensions } from 'react-native';
import DeleteItemButton from '../DeleteItemButton';

export default function CategoryButtonItemHorizontal({
    styles,
    category,
    icon,
    onClick,
    image_url,
    onDelete,
}) {
    iconSelect = name => {
        if (name === null) {
            return icons.empty;
        }
        return icons[name];
    };

    return (
        <Pressable style={[style.button, styles]} onPress={onClick}>
            <View style={[style.container, { width: onDelete ? Dimensions.get('window').width - 180 : Dimensions.get('window').width - 140 }]}>
                {image_url && (
                    <View style={style.image_container}>
                        <Image
                            style={style.image}
                            source={{
                                uri: image_url,
                            }}
                        />
                        <Image style={style.image_empty} source={iconSelect('empty')} />
                    </View>
                )}
                {icon && <Image style={style.icon} source={iconSelect(icon)} />}
                <DefaultText style={[style.text, { width: onDelete ? Dimensions.get('window').width - 200 : Dimensions.get('window').width - 160 }]} autoFont={true}>
                    {category}
                </DefaultText>
                <DeleteItemButton onDelete={onDelete} />
            </View>
        </Pressable>
    );
}