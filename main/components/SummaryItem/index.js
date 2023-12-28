import React from 'react';
import { Pressable, Image, View, Dimensions } from 'react-native';
import style from './SummaryItem.sass';
import icons from '../../constantData/icons';

const width = ((Dimensions.get('window').width - 90) / 4) - 10;

export default function SummaryItem({
    onClick,
    image_url,
}) {
    iconSelect = name => {
        if (name === null) {
            return icons.empty;
        }
        return icons[name];
    };

    return (
        <Pressable style={[style.button]} onPress={onClick}>
            <View style={[style.image_container, { width: width }, { height: width }]}>
                {image_url && (
                    <Image
                        style={[style.image, { width: (width - 20) }, { height: width - 20 }]}
                        source={{
                            uri: image_url,
                        }}
                    />
                )}
                <Image style={[style.image_empty, { width: width }, { height: width }]} source={iconSelect('empty')} />
            </View>
        </Pressable>
    );
}