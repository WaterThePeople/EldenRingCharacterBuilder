import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './TalismansContainer.sass';
import SummaryItem from '../../../components/SummaryItem';
import DefaultText from '../../../components/DefaultText';
import { useNavigation } from '@react-navigation/native';

export default function TalismansContainer({ data, containerStyle }) {

    const navigation = useNavigation();

    const [slot1, setSlot1] = useState('')
    const [slot2, setSlot2] = useState('')
    const [slot3, setSlot3] = useState('')
    const [slot4, setSlot4] = useState('')

    useEffect(() => {
        setSlot1(data?.slot1)
        setSlot2(data?.slot2)
        setSlot3(data?.slot3)
        setSlot4(data?.slot4)
    }, [data]);

    const moveToTalismanDetail = (talisman) => {
        navigation.navigate('TalismanDetailScreen',
            {
                slot: 'slot',
                talisman: talisman,
                save_id: 'save_id',
                current_talisman: 'current_talisman',
            })
    };

    return (
        <View style={[style.container, containerStyle]}>
            <View style={style.title}>
                <DefaultText>
                    Talismans
                </DefaultText>
            </View>
            <View style={style.items_container}>
                <View style={style.item_row}>
                    <SummaryItem
                        image_url={slot1 && slot1?.image_url}
                        onClick={() => slot1 && moveToTalismanDetail(slot1)}
                    />
                    <SummaryItem
                        image_url={slot2 && slot2?.image_url}
                        onClick={() => slot2 && moveToTalismanDetail(slot2)}
                    />
                </View>
                <View style={style.item_row}>
                    <SummaryItem
                        image_url={slot3 && slot3?.image_url}
                        onClick={() => slot3 && moveToTalismanDetail(slot3)}
                    />
                    <SummaryItem
                        image_url={slot4 && slot4?.image_url}
                        onClick={() => slot4 && moveToTalismanDetail(slot4)}
                    />
                </View>
            </View>
        </View>
    );
}