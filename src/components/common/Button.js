//Import Libraries for making a component
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Colours from '../../constants/Colours';

const Button = ({onPress, children}) => {
    const { textStyle, buttonStyle } = styles
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: Colours.text,
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'lobstar'
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: Colours.button,
        borderRadius: 20,
        borderWidth: 0,
        borderColor: Colours.button,
        marginLeft: 15,
        marginRight: 5
    }
}
export {Button}