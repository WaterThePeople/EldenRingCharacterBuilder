import React, { useState } from 'react';
import style from './ModalDropdownRating.sass';
import { View, Modal, Pressable, Dimensions } from 'react-native';
import DefaultText from '../DefaultText';
import SelectDropdown from 'react-native-select-dropdown';
import DropdownIcon from '../DropdownIcon';

export default function ModalDropdownRating(
    {
        visible,
        setVisible,
        text,
        rating,
        setRating,
        dropdownList,
    }
) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <Modal
            animationType="fade"
            visible={visible}
            transparent={true}
        >
            <View style={style.modal}>
                <View style={style.modal_menu}>
                    <Pressable style={style.close_container} onPress={() => setVisible(false)}>
                        <View style={style.close_vertical}></View>
                        <View style={style.close_horizontal}></View>
                    </Pressable>
                    <View style={style.content}>
                        <View style={style.text_row}>
                            <DefaultText style={style.text} numberOfLines={2} autoFont>
                                {text}
                            </DefaultText>
                        </View>
                        <View style={style.dropdown_container}>
                            <SelectDropdown
                                data={dropdownList}
                                onSelect={(selectedItem, index) => {
                                    setRating(selectedItem)
                                }}
                                buttonStyle={[
                                    style.dropdown_button,
                                ]}
                                buttonTextStyle={style.dropdown_button_text}
                                dropdownStyle={style.dropdown}
                                defaultButtonText={rating}
                                rowStyle={style.dropdown_row}
                                rowTextStyle={style.dropdown_row_text}
                                statusBarTranslucent={true}
                                renderDropdownIcon={() => DropdownIcon(isDropdownOpen)}
                                dropdownOverlayColor={'none'}
                                onFocus={() => setIsDropdownOpen(true)}
                                onBlur={() => setIsDropdownOpen(false)}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}