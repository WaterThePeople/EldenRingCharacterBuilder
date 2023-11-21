import React from 'react';
import {TextInput } from 'react-native';

export default function DefaultTextInput({ style, textClip, autoFont, value, onChange, placeholder }) {
    return (
        <>
            <TextInput
                style={[
                    { fontFamily: 'GARAM', color: 'white', fontSize: 30 },
                    style,
                ]}
                theme={{ colors: { text: '#fff' } }}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                numberOfLines={1}
                ellipsizeMode={textClip ? 'clip' : 'tail'}
                adjustsFontSizeToFit={autoFont}
                placeholderTextColor="#fff" 
            >
            </TextInput>
        </>
    );
}