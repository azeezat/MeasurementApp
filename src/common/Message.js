import React from 'react';
import {View, Text} from 'react-native';
import Colours from '../constants/Colours';

const Message = ({content}) => {
    const {textStyle}=styles
    return (
        <View>
            <Text style={textStyle}>
                {content}
            </Text>
        </View>
    );
};

styles={
    textStyle:{
        color: Colours.error,
        fontSize: 15,
        textAlign:'center',
        paddingHorizontal: 30
    }
}

export {Message};