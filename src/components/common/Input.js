import React from 'react';
import { TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Input = ({ iconName, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, containerStyle, labelStyle } = styles
    return (
        <View style={containerStyle}>
             
            <TextInput
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                autoCorrect={false}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
            <Ionicons 
                name={iconName} 
                size={32} 
                color="green" />
        </View>
    );
};

const styles = {
    inputStyle: {
        backgroundColor: 'white',
        fontSize: 18,
        flex: 1,
        height: 40,
        borderColor: 'purple',
        borderWidth: 2,
        borderRadius: 20,
        paddingLeft: 20
    },
    labelStyle: {
        position: "absolute",
        fontSize: 15,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
export { Input };