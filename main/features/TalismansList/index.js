import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './TalismansList.sass';
import GoBackButton from '../../components/GoBackButton';
import CategoryTitle from '../../components/CategoryTitle';
import CardScroll from '../../components/CardScroll';
import ListItem from '../../components/ListItem';
import DefaultButton from '../../components/DefaultButton';
import { deleteTalisman } from '../../../firebase';
import ModalConfirm from '../../components/ModalConfirm';

export default function TalismansList({ route, navigation }) {

    const { category_name, category_image, save_id, slot, current_talisman, talismans, current_talismans } = route.params;

    const [isModalVisible, setIsModalVisible] = useState(false)
    const takenTalismans = Object.values(current_talismans);

    const removeTalisman = () => {
        deleteTalisman(save_id, slot, current_talisman);
        navigation.pop(1);
    };

    const moveToTalismanDetail = (talisman) => {
        if (checkIfTaken(talisman) === 'taken') {
            setIsModalVisible(true)
        } else {
            navigation.navigate('TalismanDetailScreen',
                {
                    slot: slot,
                    talisman: talisman,
                    save_id: save_id,
                    current_talisman: current_talisman,
                })
        }
    };

    const checkIfTaken = (talisman) => {

        for (let i = 0; i < takenTalismans?.length; i++) {
            if (talisman?.talisman_name === current_talisman?.talisman_name) {
                return 'current'
            }
            if (takenTalismans[i]?.talisman_name === talisman?.talisman_name) {
                return 'taken'
            }
        }
    }

    return (
        <>
            <View style={style.container}>
                <View style={style.title_container}>
                    <GoBackButton goBackFunction={() => navigation.goBack()} />
                    <CategoryTitle icon={category_image} name={category_name} goBackButtonExist></CategoryTitle>
                </View>
                <CardScroll style={style.card}>
                    {talismans?.map((item, index) => (
                        <ListItem
                            key={index}
                            isCurrent={checkIfTaken(item) === 'current'}
                            isTaken={checkIfTaken(item) === 'taken'}
                            name={item?.talisman_name}
                            image_url={item?.image_url}
                            onClick={() => moveToTalismanDetail(item)}
                        />
                    ))}
                </CardScroll>
                <DefaultButton
                    styles={style.confirm_button}
                    label={'Clear slot'}
                    onClick={() => removeTalisman()}
                />
            </View>
            <ModalConfirm
                visible={isModalVisible}
                setVisible={setIsModalVisible}
                text={"You can't pick a talisman, that you have already slotted!"}
                onConfirm={() => setIsModalVisible(false)}
                confirmLabel={'OK'}
                confirmColor={'green'}
            />
        </>
    );
}