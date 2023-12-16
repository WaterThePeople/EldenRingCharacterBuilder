import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './ArmorsPage.sass';
import GoBackButton from '../../components/GoBackButton';
import CategoryTitle from '../../components/CategoryTitle';
import CategoryButtonItem from '../../components/CategoryButtonItem';
import Card from '../../components/Card';
import { useIsFocused } from '@react-navigation/native';
import Loader from '../../components/Loader';
import { getCurrentArmor } from '../../../firebase';

export default function ArmorsPage({ route, navigation }) {
    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState(false)
    const { save_id } = route.params;

    const [currentArmor, setCurrentArmor] = useState([])

    const [helmet, setHelmet] = useState('')
    const [chestplate, setChestplate] = useState('')
    const [gauntlets, setGauntlets] = useState('')
    const [greaves, setGreaves] = useState('')

    const getCurrentArmorData = async () => {
        setCurrentArmor(await getCurrentArmor(save_id));
        setIsLoading(false)
    };

    useEffect(() => {
        if (isFocused) {
            setIsLoading(true)
            getCurrentArmorData();
        }
    }, [isFocused]);

    useEffect(() => {
        setHelmet(currentArmor?.Helmet)
        setChestplate(currentArmor?.Armor)
        setGauntlets(currentArmor?.Gauntlets)
        setGreaves(currentArmor?.Greaves)
    }, [currentArmor]);

    const moveToArmor = (category, category_image, category_name, current_armor) => {
        navigation.navigate('ArmorListScreen', {
            category: category,
            category_name: category_name,
            category_image: category_image,
            save_id: save_id,
            current_armor: current_armor,
        });
    };

    return (
        <View style={style.container}>
            <View style={style.title_container}>
                <GoBackButton goBackFunction={() => navigation.goBack()} />
                <CategoryTitle
                    icon={'armor'}
                    name={'Armor'}
                    goBackButtonExist
                >
                </CategoryTitle>
            </View>
            {!isLoading ? (
                <Card style={style.card}>
                    <CategoryButtonItem
                        icon={!helmet && 'helmet'}
                        image_url={helmet && helmet?.image_url}
                        category={helmet?.name ? helmet?.name : 'Helmet'}
                        styles={style.item}
                        onClick={() =>
                            moveToArmor('helmets', 'helmet', 'Helmet', helmet)
                        }
                    />
                    <CategoryButtonItem
                        icon={!chestplate && 'chestplate'}
                        image_url={chestplate && chestplate?.image_url}
                        category={chestplate?.name ? chestplate?.name : 'Chestplate'}
                        styles={style.item}
                        onClick={() =>
                            moveToArmor('armors', 'armor', 'Armor', chestplate)
                        }
                    />
                    <CategoryButtonItem
                        icon={!gauntlets && 'gauntlets'}
                        image_url={gauntlets && gauntlets?.image_url}
                        category={gauntlets?.name ? gauntlets?.name : 'Gauntlets'}
                        styles={style.item}
                        onClick={() =>
                            moveToArmor('gauntlets', 'gauntlets', 'Gauntlets', gauntlets)
                        }
                    />
                    <CategoryButtonItem
                        icon={!greaves && 'greaves'}
                        image_url={greaves && greaves?.image_url}
                        category={greaves?.name ? greaves?.name : 'Greaves'}
                        styles={style.item}
                        onClick={() =>
                            moveToArmor('greaves', 'greaves', 'Greaves', greaves)
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