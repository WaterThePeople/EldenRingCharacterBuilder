import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import style from './RegisterPage.sass';
import Card from '../../components/Card';
import DefaultText from '../../components/DefaultText';
import DefaultTextInput from '../../components/DefaultTextInput';
import DefaultButton from '../../components/DefaultButton';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import ModalConfirm from '../../components/ModalConfirm';

export default function RegisterPage({ route, navigation }) {

    const [modalVisible, setModalVisible] = useState(false)

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [wrongRegister, setWrongRegister] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const goToLogin = (path) => {
        navigation.navigate(path);
    }

    const register = () => {
        handleRegister();
    }

    const handleRegister = async () => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(user, {
                displayName: userName
            });
            setWrongRegister(false)
            setModalVisible(true)
        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                setErrorMessage('Wrong email format!')
            }
            if (error.code === 'auth/email-already-in-use') {
                setErrorMessage('Email already in use!')
            }
            if (error.code === 'auth/weak-password') {
                setErrorMessage('Password too short (6 char min)!')
            }
            if (error.code === 'auth/missing-password') {
                setErrorMessage('Password cannot be empty!')
            }
            setWrongRegister(true)
        }
        finally {

        }
    }

    const onSuccesfulRegister = () => {
        navigation.navigate('LoginScreen');
    }

    useEffect(() => {
        setWrongRegister(false)
    }, [email, password, userName]);

    return (
        <>
            <Card style={style.card}>
                <View style={style.container}>
                    <Image
                        style={style.icon}
                        source={require('../../../images/Register_icon.png')}
                        resizeMode="center"
                    />
                    <DefaultText autoFont >Nice to meet you!</DefaultText>
                    <DefaultText numberOfLines={2} autoFont>Create your account!</DefaultText>
                </View>
                <View style={style.container}>
                    {wrongRegister && (
                        <View style={style.error_container}>
                            <DefaultText style={style.error_text} autoFont>{errorMessage}</DefaultText>
                        </View>
                    )}
                    <View style={style.input_container}>
                        <DefaultTextInput
                            value={userName}
                            onChange={setUserName}
                            style={style.input}
                            placeholder={'Username'}
                        ></DefaultTextInput>
                    </View>
                    <View style={style.input_container}>
                        <DefaultTextInput
                            value={email}
                            onChange={setEmail}
                            style={style.input}
                            placeholder={'Email'}
                        ></DefaultTextInput>
                    </View>
                    <View style={style.input_container}>
                        <DefaultTextInput
                            value={password}
                            onChange={setPassword}
                            style={style.input}
                            placeholder={'Password'}
                        ></DefaultTextInput>
                    </View>
                </View>
                <View style={style.container}>
                    <DefaultButton
                        label={'Create account'}
                        styles={style.button}
                        onClick={() => register()}
                    />
                    <DefaultText>or</DefaultText>
                    <DefaultButton
                        label={'Already have an account? Click here to log in'}
                        styles={style.button}
                        onClick={() => goToLogin('LoginScreen')}
                    />
                </View>
            </Card>
            <ModalConfirm
                visible={modalVisible}
                setVisible={setModalVisible}
                text={'Account was created succesfully!'}
                onConfirm={onSuccesfulRegister}
                confirmColor={'#4ac0ff'}
                confirmLabel={'Go to Login'}
            />
        </>
    );
}