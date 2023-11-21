import React, { useState } from 'react';
import { View, Image } from 'react-native';
import style from './RegisterPage.sass';
import Card from '../../components/Card';
import DefaultText from '../../components/DefaultText';
import DefaultTextInput from '../../components/DefaultTextInput';
import DefaultButton from '../../components/DefaultButton';

export default function RegisterPage({ route, navigation }) {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const goToLogin = (path) => {
        navigation.navigate(path);
    }

    const register = (path) => {
        navigation.navigate(path);
    }

    return (
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
                        value={password}
                        onChange={setPassword}
                        style={style.input}
                        placeholder={'Password'}
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
            </View>
            <View style={style.container}>
                <DefaultButton
                    label={'Create account'}
                    styles={style.button}
                    onClick={() => register('LoginScreen')}
                />
                <DefaultText>or</DefaultText>
                <DefaultButton
                    label={'Already have an account? Click here to log in'}
                    styles={style.button}
                    onClick={() => goToLogin('LoginScreen')}
                />
            </View>
        </Card>
    );
}