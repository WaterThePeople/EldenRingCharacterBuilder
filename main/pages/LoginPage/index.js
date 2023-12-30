import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import style from './LoginPage.sass';
import Card from '../../components/Card';
import DefaultText from '../../components/DefaultText';
import DefaultTextInput from '../../components/DefaultTextInput';
import DefaultButton from '../../components/DefaultButton';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useIsFocused } from '@react-navigation/native';
import LoaderFullScreen from '../../components/LoaderFullScreen';
import { useNetInfo } from '@react-native-community/netinfo';
import { Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage({ route, navigation }) {

    const netInfo = useNetInfo();
    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [rememberMe, setRememberMe] = useState('')

    const [wrongLogin, setWrongLogin] = useState(false)
    const [internetConnection, setInternetConnection] = useState(true)

    const login = () => {
        handleLogin();
    }

    const register = (path) => {
        navigation.navigate(path);
    }

    const handleLogin = async () => {
        setIsLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            navigation.navigate('HomeScreen');
            setWrongLogin(false)
        } catch (error) {
            setWrongLogin(true)
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        setWrongLogin(false)
    }, [email, password]);

    useEffect(() => {
        if (isFocused) {
            componentDidMount();
        }
    }, [isFocused]);

    useEffect(() => {
        if (netInfo?.isConnected === true) {
            setInternetConnection(true)
        } else if (netInfo?.isConnected === false) {
            setInternetConnection(false)
        }
    }, [netInfo?.isConnected]);

    const toggleRememberMe = value => {
        setRememberMe(value)
        if (value === true) {
            rememberUser();
        } else {
            forgetUser();
        }
    }

    const rememberUser = async () => {
        try {
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);
        } catch (error) {
            console.log(error)
        }
    };

    const forgetUser = async () => {
        try {
            await AsyncStorage.removeItem('email');
            await AsyncStorage.removeItem('password');
        } catch (error) {
            console.log(error)
        }
    };

    const getRememberedUser = async () => {
        try {
            const storage_email = await AsyncStorage.getItem('email');
            if (storage_email !== null) {
                setEmail(storage_email)
                setRememberMe(true)
            } else {
                setRememberMe(false)
                setEmail('')
            }
            const storage_password = await AsyncStorage.getItem('password');
            if (storage_password !== null) {
                setPassword(storage_password)
            } else {
                setPassword('')
            }
        } catch (error) {
            console.log(error)
        }
    };

    const componentDidMount = async () => {
        await getRememberedUser();
    }

    return (
        <>
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

                    {!internetConnection && (
                        <View style={style.error_container}>
                            <DefaultText style={style.error_text} autoFont>You aren't conncted to the internet!</DefaultText>
                            <DefaultText style={style.error_text} autoFont>Check your wifi connection to use the app!</DefaultText>
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
                            secureTextEntry={true}
                        ></DefaultTextInput>
                    </View>

                    <View style={style.remember_me_container}>
                        <Switch
                            value={rememberMe}
                            onValueChange={(value) => toggleRememberMe(value)}
                        />
                        <DefaultText style={style.remember_me_text}>Remember Me</DefaultText>
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
            {isLoading && (
                <LoaderFullScreen visible={isLoading} />
            )}
        </>
    );
}