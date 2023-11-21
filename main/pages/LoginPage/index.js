import React, { useState } from 'react';
import { View, Image } from 'react-native';
import style from './LoginPage.sass';
import Card from '../../components/Card';
import DefaultText from '../../components/DefaultText';
import DefaultTextInput from '../../components/DefaultTextInput';
import DefaultButton from '../../components/DefaultButton';

export default function LoginPage({ route, navigation }) {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const login = (path, username) => {
        navigation.navigate(path, {
            username: username,
        });
    }

    const register = (path) => {
        navigation.navigate(path);
    }

    return (
        <Card style={style.card}>
            <View style={style.container}>
                <Image
                    style={style.icon}
                    source={require('../../../images/Login_icon.png')}
                    resizeMode="center"
                />
                <DefaultText style={style.text} autoFont>Welcome!</DefaultText>
                <DefaultText style={style.text} numberOfLines={2} autoFont>Log in to your account!</DefaultText>
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
            </View>
            <View style={style.container}>
                <DefaultButton
                    label={'Log in'}
                    styles={style.button}
                    onClick={() => login('SaveSelectionScreen', userName)}
                />
                <DefaultText>or</DefaultText>
                <DefaultButton
                    label={'Create new account'}
                    styles={style.button}
                    onClick={() => register('RegisterScreen')}
                />
            </View>
        </Card>
    );
}