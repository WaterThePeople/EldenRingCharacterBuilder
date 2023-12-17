import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './SpellsPage.sass';
import GoBackButton from '../../components/GoBackButton';
import CategoryTitle from '../../components/CategoryTitle';
import CategoryButtonItemHorizontal from '../../components/CategoryButtonItemHorizontal';
import Card from '../../components/Card';
import CardScroll from '../../components/CardScroll';
import { useIsFocused } from '@react-navigation/native';
import Loader from '../../components/Loader';
import { getData, getCurrentSpells } from '../../../firebase';

export default function SpellsPage({ route, navigation }) {
    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState(false)
    const { save_id } = route.params;

    const [spells, setSpells] = useState([])
    const [currentSpells, setCurrentSpells] = useState([])
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

    const getCurrentSpellsData = async () => {
        setCurrentSpells(await getCurrentSpells(save_id));
    };

    useEffect(() => {
        if (isFocused) {
            setIsLoading(true)
            getData('spells', setSpells);
            getCurrentSpellsData();
        }
    }, [isFocused]);

    useEffect(() => {
        if (currentSpells?.hasMoonOfNokstella) {
            setHasMoonOfNokstella(true)
        }
        setSlot1(currentSpells?.slot1)
        setSlot2(currentSpells?.slot2)
        setSlot3(currentSpells?.slot3)
        setSlot4(currentSpells?.slot4)
        setSlot5(currentSpells?.slot5)
        setSlot6(currentSpells?.slot6)
        setSlot7(currentSpells?.slot7)
        setSlot8(currentSpells?.slot8)
        setSlot9(currentSpells?.slot9)
        setSlot10(currentSpells?.slot10)
        setSlot11(currentSpells?.slot11)
        setSlot12(currentSpells?.slot12)
        setIsLoading(false)
    }, [currentSpells]);

    const moveToSpells = (category_image, category_name, slot, current_spell, current_spells) => {
        navigation.navigate('SpellsListScreen', {
            category_name: category_name,
            category_image: category_image,
            slot: slot,
            current_spell: current_spell,
            current_spells: current_spells,
            spells: spells ? spells?.data : [],
            save_id: save_id,
        });
    };

    return (
        <View style={style.container}>
            <View style={style.title_container}>
                <GoBackButton goBackFunction={() => navigation.goBack()} />
                <CategoryTitle
                    icon={'spells'}
                    name={'Spells'}
                    goBackButtonExist
                >
                </CategoryTitle>
            </View>
            {!isLoading ? (
                <CardScroll style={style.card}>
                    <CategoryButtonItemHorizontal
                        icon={!slot1 && 'empty'}
                        image_url={slot1 && slot1?.image_url}
                        category={slot1?.spell_name ? slot1?.spell_name : 'Spell slot 1 '}
                        onClick={() =>
                            moveToSpells('spells', 'Slot 1', 'slot1', slot1, currentSpells)
                        }
                    />
                    <CategoryButtonItemHorizontal
                        icon={!slot2 && 'empty'}
                        image_url={slot2 && slot2?.image_url}
                        category={slot2?.spell_name ? slot2?.spell_name : 'Spell slot 2 '}
                        onClick={() =>
                            moveToSpells('spells', 'Slot 2', 'slot2', slot2, currentSpells)
                        }
                    />
                    <CategoryButtonItemHorizontal
                        icon={!slot3 && 'empty'}
                        image_url={slot3 && slot3?.image_url}
                        category={slot3?.spell_name ? slot3?.spell_name : 'Spell slot 3 '}
                        onClick={() =>
                            moveToSpells('spells', 'Slot 3', 'slot3', slot3, currentSpells)
                        }
                    />
                    <CategoryButtonItemHorizontal
                        icon={!slot4 && 'empty'}
                        image_url={slot4 && slot4?.image_url}
                        category={slot4?.spell_name ? slot4?.spell_name : 'Spell slot 4 '}
                        onClick={() =>
                            moveToSpells('spells', 'Slot 4', 'slot4', slot4, currentSpells)
                        }
                    />
                    <CategoryButtonItemHorizontal
                        icon={!slot5 && 'empty'}
                        image_url={slot5 && slot5?.image_url}
                        category={slot5?.spell_name ? slot5?.spell_name : 'Spell slot 5 '}
                        onClick={() =>
                            moveToSpells('spells', 'Slot 5', 'slot5', slot5, currentSpells)
                        }
                    />
                    <CategoryButtonItemHorizontal
                        icon={!slot6 && 'empty'}
                        image_url={slot6 && slot6?.image_url}
                        category={slot6?.spell_name ? slot6?.spell_name : 'Spell slot 6 '}
                        onClick={() =>
                            moveToSpells('spells', 'Slot 6', 'slot6', slot6, currentSpells)
                        }
                    />
                    <CategoryButtonItemHorizontal
                        icon={!slot7 && 'empty'}
                        image_url={slot7 && slot7?.image_url}
                        category={slot7?.spell_name ? slot7?.spell_name : 'Spell slot 7 '}
                        onClick={() =>
                            moveToSpells('spells', 'Slot 7', 'slot7', slot7, currentSpells)
                        }
                    />
                    <CategoryButtonItemHorizontal
                        icon={!slot8 && 'empty'}
                        image_url={slot8 && slot8?.image_url}
                        category={slot8?.spell_name ? slot8?.spell_name : 'Spell slot 8 '}
                        onClick={() =>
                            moveToSpells('spells', 'Slot 8', 'slot8', slot8, currentSpells)
                        }
                    />
                    <CategoryButtonItemHorizontal
                        icon={!slot9 && 'empty'}
                        image_url={slot9 && slot9?.image_url}
                        category={slot9?.spell_name ? slot9?.spell_name : 'Spell slot 9 '}
                        onClick={() =>
                            moveToSpells('spells', 'Slot 9', 'slot9', slot9, currentSpells)
                        }
                    />
                    <CategoryButtonItemHorizontal
                        icon={!slot10 && 'empty'}
                        image_url={slot10 && slot10?.image_url}
                        category={slot10?.spell_name ? slot10?.spell_name : 'Spell slot 10 '}
                        onClick={() =>
                            moveToSpells('spells', 'Slot 10', 'slot10', slot10, currentSpells)
                        }
                    />
                    {hasMoonOfNokstella && (
                        <CategoryButtonItemHorizontal
                            icon={!slot11 && 'empty'}
                            image_url={slot11 && slot11?.image_url}
                            category={slot11?.spell_name ? slot11?.spell_name : 'Spell slot 11 '}
                            onClick={() =>
                                moveToSpells('spells', 'Slot 11', 'slot11', slot11, currentSpells)
                            }
                        />
                    )}
                    {hasMoonOfNokstella && (
                        <CategoryButtonItemHorizontal
                            icon={!slot12 && 'empty'}
                            image_url={slot12 && slot12?.image_url}
                            category={slot12?.spell_name ? slot12?.spell_name : 'Spell slot 12 '}
                            onClick={() =>
                                moveToSpells('spells', 'Slot 12', 'slot12', slot12, currentSpells)
                            }
                        />
                    )}
                </CardScroll>
            ) : (
                <Card style={style.card_loading}>
                    <Loader />
                </Card>
            )}
        </View>
    );
}