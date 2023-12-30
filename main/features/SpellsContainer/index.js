import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './SpellsContainer.sass';
import SummaryItem from '../../components/SummaryItem';
import DefaultText from '../../components/DefaultText';
import { useNavigation } from '@react-navigation/native';

export default function SpellsContainer({ data, containerStyle }) {

    const navigation = useNavigation();

    const [hasMoonOfNokstella, setHasMoonOfNokstella] = useState(false)
    const [slot1, setSlot1] = useState('')
    const [slot2, setSlot2] = useState('')
    const [slot3, setSlot3] = useState('')
    const [slot4, setSlot4] = useState('')
    const [slot5, setSlot5] = useState('')
    const [slot6, setSlot6] = useState('')
    const [slot7, setSlot7] = useState('')
    const [slot8, setSlot8] = useState('')
    const [slot9, setSlot9] = useState('')
    const [slot10, setSlot10] = useState('')
    const [slot11, setSlot11] = useState('')
    const [slot12, setSlot12] = useState('')

    useEffect(() => {
        if (data?.hasMoonOfNokstella) {
            setHasMoonOfNokstella(true)
        }
        setSlot1(data?.slot1)
        setSlot2(data?.slot2)
        setSlot3(data?.slot3)
        setSlot4(data?.slot4)
        setSlot5(data?.slot5)
        setSlot6(data?.slot6)
        setSlot7(data?.slot7)
        setSlot8(data?.slot8)
        setSlot9(data?.slot9)
        setSlot10(data?.slot10)
        setSlot11(data?.slot11)
        setSlot12(data?.slot12)
    }, [data]);

    const moveToSpellDetail = (spell) => {
        navigation.navigate('SpellDetailScreen',
            {
                slot: 'slot',
                spell: spell,
                save_id: 'save_id',
            })
    };

    return (
        <View style={[style.container, containerStyle]}>
            <View style={style.title}>
                <DefaultText>
                    Spells
                </DefaultText>
            </View>
            <View style={style.items_container}>
                <View style={style.item_row}>
                    <SummaryItem
                        image_url={slot1 && slot1?.image_url}
                        onClick={() => slot1 && moveToSpellDetail(slot1)}
                    />
                    <SummaryItem
                        image_url={slot2 && slot2?.image_url}
                        onClick={() => slot2 && moveToSpellDetail(slot2)}
                    />
                </View>
                <View style={style.item_row}>
                    <SummaryItem
                        image_url={slot3 && slot3?.image_url}
                        onClick={() => slot3 && moveToSpellDetail(slot3)}
                    />
                    <SummaryItem
                        image_url={slot4 && slot4?.image_url}
                        onClick={() => slot4 && moveToSpellDetail(slot4)}
                    />
                </View>
                <View style={style.item_row}>
                    <SummaryItem
                        image_url={slot5 && slot5?.image_url}
                        onClick={() => slot5 && moveToSpellDetail(slot5)}
                    />
                    <SummaryItem
                        image_url={slot6 && slot6?.image_url}
                        onClick={() => slot6 && moveToSpellDetail(slot6)}
                    />
                </View>
                <View style={style.item_row}>
                    <SummaryItem
                        image_url={slot7 && slot7?.image_url}
                        onClick={() => slot7 && moveToSpellDetail(slot7)}
                    />
                    <SummaryItem
                        image_url={slot8 && slot8?.image_url}
                        onClick={() => slot8 && moveToSpellDetail(slot8)}
                    />
                </View>
                <View style={style.item_row}>
                    <SummaryItem
                        image_url={slot9 && slot9?.image_url}
                        onClick={() => slot9 && moveToSpellDetail(slot9)}
                    />
                    <SummaryItem
                        image_url={slot10 && slot10?.image_url}
                        onClick={() => slot10 && moveToSpellDetail(slot10)}
                    />
                </View>
                {hasMoonOfNokstella && (
                    <View style={style.item_row}>
                        <SummaryItem
                            image_url={slot11 && slot11?.image_url}
                            onClick={() => slot11 && moveToSpellDetail(slot11)}
                        />
                        <SummaryItem
                            image_url={slot12 && slot12?.image_url}
                            onClick={() => slot12 && moveToSpellDetail(slot12)}
                        />
                    </View>
                )}
            </View>
        </View>
    );
}