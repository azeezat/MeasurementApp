import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Table extends Component {

  render() {
    const { container, items1, items2 } = styles
    return (
        <View style={container}>
          <View style={items1}>
            <Text>Metric</Text>
          </View>
          <View style={items2}>
            <Text>Value</Text>
          </View>
        </View>
    );
  }
}

styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justiftContent:'center'
  },
  items1: {
    backgrounfColor: 'red',
    height: 80,
    flex: 1,
    alignItems: 'center'
  },
  items2: {
    backgrounfColor: 'red',
    height: 80,
    flex: 2,
    alignItems: 'center'
  }
}

export {Table}