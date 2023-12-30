import React from 'react';
import style from './ModalConfirm.sass';
import { View, Modal, Pressable } from 'react-native';
import DefaultButton from '../DefaultButton';
import DefaultText from '../DefaultText';

export default function ModalConfirm(
    {
        visible,
        setVisible,
        text,
        onConfirm,
        onDecline,
        confirmLabel,
        declineLabel,
        confirmColor,
        declineColor,
        textInfo,
    }
) {
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
                        {textInfo && (
                            <View style={style.text_row}>
                                <DefaultText style={style.text_info} numberOfLines={0} autoFont>
                                    {textInfo}
                                </DefaultText>
                            </View>
                        )}
                        <View style={style.button_row}>
                            {onConfirm && (
                                <DefaultButton label={confirmLabel} styles={[style.confirm, { backgroundColor: confirmColor }]} onClick={onConfirm} />
                            )}
                            {onDecline && (
                                <DefaultButton label={declineLabel} styles={[style.decline, { backgroundColor: declineColor }]} onClick={onDecline} />
                            )}
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}