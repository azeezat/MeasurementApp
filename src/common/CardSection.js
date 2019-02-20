//Import Libraries for making a component
import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative'

    }
}

export {CardSection}