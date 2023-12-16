import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './TalismansPage.sass';
import GoBackButton from '../../components/GoBackButton';
import CategoryTitle from '../../components/CategoryTitle';
import CategoryButtonItem from '../../components/CategoryButtonItem';
import Card from '../../components/Card';
import { useIsFocused } from '@react-navigation/native';
import Loader from '../../components/Loader';
import { getData, getCurrentTalismans } from '../../../firebase';

export default function TalismansPage({ route, navigation }) {
    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState(false)
    const { save_id } = route.params;

    const [talismans, setTalismans] = useState([])
    const [currentTalismans, setCurrentTalismans] = useState([])

    const [slot1, setSlot1] = useState('')
    const [slot2, setSlot2] = useState('')
    const [slot3, setSlot3] = useState('')
    const [slot4, setSlot4] = useState('')

    const getCurrentTalismansData = async () => {
        setCurrentTalismans(await getCurrentTalismans(save_id));
    };

    useEffect(() => {
        if (isFocused) {
            setIsLoading(true)
            getData('talismans', setTalismans);
            getCurrentTalismansData();
        }
    }, [isFocused]);

    useEffect(() => {
        setSlot1(currentTalismans?.slot1)
        setSlot2(currentTalismans?.slot2)
        setSlot3(currentTalismans?.slot3)
        setSlot4(currentTalismans?.slot4)
        setIsLoading(false)
    }, [currentTalismans]);

    const moveToTalismans = (category_image, category_name, slot, current_talisman, current_talismans) => {
        navigation.navigate('TalismansListScreen', {
            category_name: category_name,
            category_image: category_image,
            slot: slot,
            current_talisman: current_talisman,
            current_talismans: current_talismans,
            talismans: talismans ? talismans?.data : [],
            save_id: save_id,
        });
    };

    return (
        <View style={style.container}>
            <View style={style.title_container}>
                <GoBackButton goBackFunction={() => navigation.goBack()} />
                <CategoryTitle
                    icon={'talismans'}
                    name={'Talismans'}
                    goBackButtonExist
                >
                </CategoryTitle>
            </View>
            {!isLoading ? (
                <Card style={style.card}>
                    <CategoryButtonItem
                        icon={!slot1 && 'empty'}
                        image_url={slot1 && slot1?.image_url}
                        category={slot1?.talisman_name ? slot1?.talisman_name : 'Empty'}
                        styles={style.item}
                        onClick={() =>
                            moveToTalismans('talismans', 'Slot 1', 'slot1', slot1, currentTalismans)
                        }
                    />
                    <CategoryButtonItem
                        icon={!slot2 && 'empty'}
                        image_url={slot2 && slot2?.image_url}
                        category={slot2?.talisman_name ? slot2?.talisman_name : 'Empty'}
                        styles={style.item}
                        onClick={() =>
                            moveToTalismans('talismans', 'Slot 2', 'slot2', slot2, currentTalismans)
                        }
                    />
                    <CategoryButtonItem
                        icon={!slot3 && 'empty'}
                        image_url={slot3 && slot3?.image_url}
                        category={slot3?.talisman_name ? slot3?.talisman_name : 'Empty'}
                        styles={style.item}
                        onClick={() =>
                            moveToTalismans('talismans', 'Slot 3', 'slot3', slot3, currentTalismans)
                        }
                    />
                    <CategoryButtonItem
                        icon={!slot4 && 'empty'}
                        image_url={slot4 && slot4?.image_url}
                        category={slot4?.talisman_name ? slot4?.talisman_name : 'Empty'}
                        styles={style.item}
                        onClick={() =>
                            moveToTalismans('talismans', 'Slot 4', 'slot4', slot4, currentTalismans)
                        }
                    />
                </Card>
            ) : (
                <Card style={style.card_loading}>
                    <Loader />
                </Card>
            )}
        </View>
    );
}