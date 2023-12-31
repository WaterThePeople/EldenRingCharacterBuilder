import React, { useState, useEffect } from 'react';
import { Pressable, View, Image } from 'react-native';
import style from './RankingItemButton.sass';
import DefaultText from '../DefaultText';
import icons from '../../constantData/icons';

export default function RankingItemButton({ className, onClick, saveName, userName, rating }) {

    const [icon, setIcon] = useState('')

    iconSelect = (name) => {
        if (name === null) {
            return icons.empty
        }
        return icons[name]
    }

    useEffect(() => {
        if (rating === 0) {
            setIcon('')
        }
        else if (rating > 0 && rating <= 1) {
            setIcon('rating1')
        }
        else if (rating > 1 && rating <= 2) {
            setIcon('rating2')
        }
        else if (rating > 2 && rating <= 3) {
            setIcon('rating3')
        }
        else if (rating > 3 && rating <= 4) {
            setIcon('rating4')
        }
        else if (rating > 4 && rating <= 5) {
            setIcon('rating5')
        }
    }, [rating]);

    return (
        <>
            <Pressable
                style={[className, style.button]}
                onPress={onClick}>
                <View style={style.text_container}>
                    <DefaultText style={[style.label]} textClip={true}>{saveName}</DefaultText>
                    <DefaultText style={[style.author_label]} textClip={true}>{userName}</DefaultText>
                </View>
                <View style={style.rating_container}>
                    {icon ? (
                        <>
                            <DefaultText style={style.rating_label} textClip={true}>
                                {rating}
                            </DefaultText>
                            <Image
                                style={style.icon}
                                source={iconSelect(icon)}
                            />
                        </>
                    ) : (
                        <DefaultText style={style.rating_label_empty} textClip={true}>
                            No ratings yet!
                        </DefaultText>
                    )}
                </View>
            </Pressable>
        </>
    );
}