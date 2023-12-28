import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './ArmorContainer.sass';
import SummaryItem from '../../../components/SummaryItem';
import DefaultText from '../../../components/DefaultText';

export default function ArmorContainer({ data, containerStyle }) {
    const [helmet, setHelmet] = useState('')
    const [chestplate, setChestplate] = useState('')
    const [gauntlets, setGauntlets] = useState('')
    const [greaves, setGreaves] = useState('')

    useEffect(() => {
        setHelmet(data?.Helmet)
        setChestplate(data?.Armor)
        setGauntlets(data?.Gauntlets)
        setGreaves(data?.Greaves)
    }, [data]);

    return (
        <View style={[style.container, containerStyle]}>
            <View style={style.title}>
                <DefaultText>
                    Armor
                </DefaultText>
            </View>
            <View style={[style.items_container, { flex: 1 }]}>
                <View style={style.item_row}>
                    <SummaryItem
                        image_url={helmet && helmet?.image_url}
                        onClick={() => console.log('XD')}
                    />
                    <SummaryItem
                        image_url={chestplate && chestplate?.image_url}
                        onClick={() => console.log('XD')}
                    />
                </View>
                <View style={style.item_row}>
                    <SummaryItem
                        image_url={gauntlets && gauntlets?.image_url}
                        onClick={() => console.log('XD')}
                    />
                    <SummaryItem
                        image_url={greaves && greaves?.image_url}
                        onClick={() => console.log('XD')}
                    />
                </View>
            </View>
        </View>
    );
}