import React, { useState } from 'react';
import { View } from 'react-native';
import style from './ClassStatInfo.sass';
import DefaultText from '../DefaultText';
import { Pressable } from 'react-native';
import Plus from '../Plus';
import Minus from '../Minus';
import ModalNumberInput from '../ModalNumberInput';

export default function ClassStatInfo({ stat, value, totalValue, onPlus, onMinus, onNumberInput }) {

    const [isVisible, setIsVisible] = useState(false)
    const [numberEdit, setNumberEdit] = useState(value)
    const [errorMessage, setErrorMessage] = useState('')
    const [error, setError] = useState(false)

    const onConfirm = () => {
        if (checkForErrors()) {
            onNumberInput(numberEdit)
            setIsVisible(false)
            setError(false)
            setErrorMessage('')
        }
    }

    function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

    const checkForErrors = () => {
        if (!isNumber(parseInt(numberEdit))) {
            setErrorMessage("Wrong data format")
            setError(true)
            return false
        }
        if (parseInt(numberEdit) < parseInt(value)) {
            setErrorMessage("Inputed stat value can't be lower than starting stat")
            setError(true)
            return false
        }
        return true
    }

    return (
        <>
            <View style={style.container}>
                <DefaultText style={style.text} autoFont={true}>{stat}</DefaultText>
                <DefaultText style={style.text_initial} autoFont={true}>{value}</DefaultText>
                <View style={style.total_container}>
                    {onMinus && (
                        <Pressable onPress={onMinus}>
                            <Minus noBackground />
                        </Pressable>
                    )}
                    {onNumberInput ? (
                        <Pressable onPress={() => setIsVisible(true)}>
                            <DefaultText style={style.text_total} autoFont={true}>{totalValue}</DefaultText>
                        </Pressable>
                    ) : (
                        <DefaultText style={style.text_total} autoFont={true}>{totalValue}</DefaultText>
                    )}
                    {onPlus && (
                        <Pressable onPress={onPlus}>
                            <Plus noBackground />
                        </Pressable>
                    )}
                </View>
            </View>
            <ModalNumberInput
                visible={isVisible}
                setVisible={setIsVisible}
                text={'Change value of ' + stat}
                inputPlaceholder={totalValue}
                confirmLabel={'Confirm'}
                confirmColor={'#b79e1f'}
                onConfirm={onConfirm}
                value={numberEdit}
                setInputValue={setNumberEdit}
                errorMessage={errorMessage}
                errorVisible={error}
            />
        </>
    );
}