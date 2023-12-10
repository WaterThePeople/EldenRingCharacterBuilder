import React from 'react';
import styles from './LoaderFullScreen.sass';
import { View, ActivityIndicator, Modal } from 'react-native';

export default function LoaderFullScreen({ size = 100, visible }) {

    return (
        <Modal
            animationType="fade"
            visible={visible}
            transparent={true}
        >
            <View style={[styles.container]} >
                <ActivityIndicator size={size} color={'#9B7A03'} />
            </View>
        </Modal>
    );
}