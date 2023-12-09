import React from 'react';
import style from './ModalConfirm.sass';
import { View, Modal, Pressable } from 'react-native';

export default function ModalConfirm({ visible, setVisible, children }) {
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
                        {children}
                    </View>
                </View>
            </View>
        </Modal>
    );
}