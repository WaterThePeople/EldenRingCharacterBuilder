import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './ArmorList.sass';
import GoBackButton from '../../../components/GoBackButton';
import CategoryTitle from '../../../components/CategoryTitle';
import CardScroll from '../../../components/CardScroll';
import DefaultButton from '../../../components/DefaultButton';
import ListItem from '../../../components/ListItem';
import { getData, deleteArmor } from '../../../../firebase';
import Loader from '../../../components/Loader';
import Card from '../../../components/Card';

export default function ArmorList({ route, navigation }) {

    const { category, category_name, category_image, save_id, current_armor } = route.params;
    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState('')

    const getArmorData = async => {
        setIsLoading(true)
        try {
            getData(category, setItems);
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getArmorData();
    }, [category]);

    const moveToArmorDetail = (armor) => {
        navigation.navigate('ArmorDetailScreen',
            {
                category_name: category_name,
                armor: armor,
                save_id: save_id,

            })
    };

    const removeArmor = () => {
        deleteArmor(save_id, category_name);
        navigation.pop(1);
    };

    return (
        <View style={style.container}>
            <View style={style.title_container}>
                <GoBackButton goBackFunction={() => navigation.goBack()} />
                <CategoryTitle icon={category_image} name={category_name} goBackButtonExist></CategoryTitle>
            </View>
            {!isLoading ? (
                <CardScroll style={style.card}>
                    {items?.data?.map((item, index) => (
                        <ListItem
                            key={index}
                            isCurrent={item?.name === current_armor?.name}
                            name={item?.name}
                            image_url={item?.image_url}
                            onClick={() => moveToArmorDetail(item)}
                        />
                    ))}
                </CardScroll>
            ) : (
                <Card style={style.card_loading}>
                    <Loader />
                </Card>
            )}
            <DefaultButton
                styles={style.confirm_button}
                label={'Clear slot'}
                onClick={() => removeArmor()}
            />
        </View>
    );
}