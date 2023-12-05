import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './WeaponsPage.sass';
import GoBackButton from '../../components/GoBackButton';
import CategoryTitle from '../../components/CategoryTitle';
import CategoryButton from '../../components/CategoryButton';
import Card from '../../components/Card';
import { getData } from '../../../firebase';

export default function WeaponsPage({ route, navigation }) {

    const { save_id, save_weapons } = route.params;
    const [weapons, setWeapons] = useState([])

    useEffect(() => {
        getData('weapons', setWeapons)
    }, []);

    const moveToWeapon = (category_image, category_name) => {
        navigation.navigate('WeaponsList',
            {
                category_name: category_name,
                category_image: category_image,
                weapons: weapons ? weapons?.data : [],
            })
    };

    return (
        <View style={style.container}>
            <View style={style.title_container}>
                <GoBackButton goBackFunction={() => navigation.goBack()} />
                <CategoryTitle icon={'weapons'} name={'Weapons'} goBackButtonExist></CategoryTitle>
            </View>
            <Card style={style.card}>
                <CategoryButton
                    icon={'right_hand'}
                    category={'Empty'}
                    styles={style.item}
                    onClick={() => moveToWeapon('right_hand', 'Right hand 1')}
                />
                <CategoryButton
                    icon={'left_hand'}
                    category={'Empty'}
                    styles={style.item}
                    onClick={() => moveToWeapon('left_hand', 'Left hand 1')}
                />
                <CategoryButton
                    icon={'right_hand'}
                    category={'Empty'}
                    styles={style.item}
                    onClick={() => moveToWeapon('right_hand', 'Right hand 2')}
                />
                <CategoryButton
                    icon={'left_hand'}
                    category={'Empty'}
                    styles={style.item}
                    onClick={() => moveToWeapon('left_hand', 'Left hand 2')}
                />
                <CategoryButton
                    icon={'right_hand'}
                    category={'Empty'}
                    styles={style.item}
                    onClick={() => moveToWeapon('right_hand', 'Right hand 3')}
                />
                <CategoryButton
                    icon={'left_hand'}
                    category={'Empty'}
                    styles={style.item}
                    onClick={() => moveToWeapon('left_hand', 'Left hand 3')}
                />
            </Card>
        </View>
    );
}