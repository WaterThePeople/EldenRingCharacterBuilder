import React from 'react';
import style from './ModalTextInput.sass';
import { View, Modal, Pressable } from 'react-native';
import DefaultButton from '../DefaultButton';
import DefaultText from '../DefaultText';
import DefaultTextInput from '../DefaultTextInput';

export default function ModalTextInput(
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
        inputPlaceholder,
        inputValue,
        setInputValue,
        errorMessage,
        errorVisible,
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

                        {errorVisible && (
                            <View style={style.error_container}>
                                <DefaultText style={style.error_text} autoFont>{errorMessage}</DefaultText>
                            </View>
                        )}

                        <View style={style.input_row}>
                            <DefaultTextInput
                                style={style.input_text}
                                buttonSize={65}
                                placeholder={inputPlaceholder}
                                value={inputValue}
                                onChange={setInputValue}
                            />
                        </View>

                        <View style={style.text_row}>
                            <DefaultText style={style.text} numberOfLines={2} autoFont>
                                {text}
                            </DefaultText>
                        </View>

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