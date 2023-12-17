import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './SpellsList.sass';
import GoBackButton from '../../../components/GoBackButton';
import CategoryTitle from '../../../components/CategoryTitle';
import CardScroll from '../../../components/CardScroll';
import ListItem from '../../../components/ListItem';
import DefaultButton from '../../../components/DefaultButton';
import { deleteSpell } from '../../../../firebase';
import ModalConfirm from '../../../components/ModalConfirm';

export default function SpellsList({ route, navigation }) {

    const { category_name, category_image, save_id, slot, current_spell, spells, current_spells } = route.params;

    const [isModalVisible, setIsModalVisible] = useState(false)
    const takenSpells = Object.values(current_spells);

    const removeSpell = () => {
        deleteSpell(save_id, slot, current_spell);
        navigation.pop(1);
    };

    const moveToSpellDetail = (spell) => {
        if (checkIfTaken(spell) === 'taken') {
            setIsModalVisible(true)
        } else {
            navigation.navigate('SpellDetailScreen',
                {
                    slot: slot,
                    spell: spell,
                    save_id: save_id,
                })
        }
    };

    const checkIfTaken = (spell) => {

        for (let i = 0; i < takenSpells?.length; i++) {
            if (spell?.spell_name === current_spell?.spell_name) {
                return 'current'
            }
            if (takenSpells[i]?.spell_name === spell?.spell_name) {
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
                    {spells?.map((item, index) => (
                        <ListItem
                            key={index}
                            isCurrent={checkIfTaken(item) === 'current'}
                            isTaken={checkIfTaken(item) === 'taken'}
                            name={item?.spell_name}
                            image_url={item?.image_url}
                            onClick={() => moveToSpellDetail(item)}
                        />
                    ))}
                </CardScroll>
                <DefaultButton
                    styles={style.confirm_button}
                    label={'Clear slot'}
                    onClick={() => removeSpell()}
                />
            </View>
            <ModalConfirm
                visible={isModalVisible}
                setVisible={setIsModalVisible}
                text={"You can't pick a spell, that you have already slotted!"}
                onConfirm={() => setIsModalVisible(false)}
                confirmLabel={'OK'}
                confirmColor={'green'}
            />
        </>
    );
}