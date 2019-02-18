import React, { Component } from 'react';
import {View} from 'react-native';
import Router from './Router';

class RootComponent extends Component {

    render() {
        return (
            <View>
               <Router/> 
            </View>
        
        )
    }
}

export default RootComponent;