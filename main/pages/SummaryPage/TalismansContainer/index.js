import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './TalismansContainer.sass';
import SummaryItem from '../../../components/SummaryItem';
import DefaultText from '../../../components/DefaultText';

export default function TalismansContainer({ data, containerStyle }) {
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
                        onClick={() => console.log('XD')}
                    />
                    <SummaryItem
                        image_url={slot2 && slot2?.image_url}
                        onClick={() => console.log('XD')}
                    />
                </View>
                <View style={style.item_row}>
                    <SummaryItem
                        image_url={slot3 && slot3?.image_url}
                        onClick={() => console.log('XD')}
                    />
                    <SummaryItem
                        image_url={slot4 && slot4?.image_url}
                        onClick={() => console.log('XD')}
                    />
                </View>
            </View>
        </View>
    );
}