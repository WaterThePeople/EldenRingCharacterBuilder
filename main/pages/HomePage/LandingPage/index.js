import React, { useState } from 'react';
import { View, Image, useWindowDimensions, Pressable } from 'react-native';
import DefaultText from '../../../components/DefaultText';
import style from './LandingPage.sass';
import { getAuth } from 'firebase/auth'
import Title from '../../../components/Title';
import icons from '../../../constantData/icons';
import { useNavigation } from '@react-navigation/native';
import ModalConfirm from '../../../components/ModalConfirm';

export default function LandingPage() {

    const auth = getAuth();
    const user = auth.currentUser;
    const navigation = useNavigation();
    const layout = useWindowDimensions();

    const [modalVisible, setModalVisible] = useState(false)

    iconSelect = (name) => {
        if (name === null) {
            return icons.empty
        }
        return icons[name]
    }

    const logout = () => {
        setModalVisible(true)
    }

    const onLogoutConfirm = () => {
        navigation.navigate('LoginScreen');
    }

    return (
        <>
            <View style={style.container}>
                <View style={style.content}>
                    <Title
                        name={user ? 'Welcome \n' + user.displayName + '!' : 'Account name'}
                        numberOfLines={2}
                        autoFont={false}
                    />

                    <View style={[style.image_container, { width: layout.width - 40, height: layout.width - 40 }]}>
                        <Image
                            style={style.image}
                            source={iconSelect('map')}
                        />
                        <View style={style.info_container}>
                            <DefaultText numberOfLines={0} style={style.text_style}>
                                Welcome to Elden Ring character builder.
                                This app allows you to create characters, as well as view the characters made by other users.
                            </DefaultText>
                        </View>
                    </View>

                </View>
                <View style={style.authors}>
                    <View style={style.text_container}>
                        <DefaultText numberOfLines={0} style={style.text_style_bottom}>
                            App created and developed by:
                        </DefaultText>
                        <DefaultText numberOfLines={0} style={style.text_style_bottom}>
                            Maksymilian Skrzypczak,
                        </DefaultText>
                        <DefaultText numberOfLines={0} style={style.text_style_bottom}>
                            Tomasz Bogusławski
                        </DefaultText>
                    </View>
                    <Pressable
                        style={style.button}
                        onPress={() => logout()}>
                        <View style={style.button_container}>
                            <DefaultText autoFont={true}>
                                Logout
                            </DefaultText>
                            <Image
                                style={style.icon}
                                source={iconSelect('logout')}
                            />
                        </View>
                    </Pressable>
                </View>
            </View>
            <ModalConfirm
                visible={modalVisible}
                setVisible={setModalVisible}
                text={'Are you sure you want to logout?'}
                onDecline={() => setModalVisible(false)}
                onConfirm={onLogoutConfirm}
                confirmLabel={'Yes'}
                declineLabel={'No'}
                confirmColor={'green'}
                declineColor={'red'}
            />
        </>
    );
}