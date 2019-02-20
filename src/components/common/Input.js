import React from 'react';
import { TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colours from '../../constants/Colours';

const Input = ({ iconName, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, containerStyle, labelStyle } = styles
    return (
        <View style={containerStyle}>
            <Ionicons
                name={iconName}
                size={50}
                color={Colours.button}
                style={labelStyle}
            />
            <TextInput
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                autoCorrect={false}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />


        </View>
    );
};

const styles = {
    inputStyle: {
        backgroundColor: 'white',
        fontSize: 18,
        flex: 1,
        height: 40,
        borderColor: Colours.button,
        borderWidth: 2,
        borderRadius: 20,
        paddingLeft: 40,
    },
    labelStyle: {
        fontSize: 22,
        right: -30,
        zIndex: 1

    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
export { Input };