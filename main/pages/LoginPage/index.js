import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import style from './LoginPage.sass';
import Card from '../../components/Card';
import DefaultText from '../../components/DefaultText';
import DefaultTextInput from '../../components/DefaultTextInput';
import DefaultButton from '../../components/DefaultButton';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function LoginPage({ route, navigation }) {

    const [email, setEmail] = useState('test@gmail.com')
    const [password, setPassword] = useState('pass123')

    const [wrongLogin, setWrongLogin] = useState(false)

    const login = () => {
        handleLogin();
    }

    const register = (path) => {
        navigation.navigate(path);
    }

    const handleLogin = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            navigation.navigate('SaveSelectionScreen');
            setWrongLogin(false)
        } catch (error) {
            setWrongLogin(true)
            console.log(error)
        }
        finally {

        }
    }

    useEffect(() => {
        setWrongLogin(false)
    }, [email, password]);

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

                {wrongLogin && (
                    <View style={style.error_container}>
                        <DefaultText style={style.error_text} autoFont>Wrong email or password!</DefaultText>
                    </View>
                )}

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
                    label={'Log in'}
                    styles={style.button}
                    onClick={() => login()}
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