import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Colours from '../../constants/Colours';

class Table extends Component {

  render() {
    const { container, tableHeaderItems, tableBody, tableBodyItems } = styles
    return (
      <View>
        <View style={container}>
          <View style={tableHeaderItems}>
            <Text>Title</Text>
          </View>
          <View style={tableHeaderItems}>
            <Text>Title</Text>
          </View>
          <View style={tableHeaderItems}>
            <Text>Title</Text>
          </View>
        </View>
        <View style={tableBody}>
          <View style={tableBodyItems}>
            <Text>Value</Text>
          </View>
          <View style={tableBodyItems}>
            <Text>Value</Text>
          </View>
          <View style={tableBodyItems}>
            <Text>Value</Text>
          </View>
        </View>
        {/* <View style={container}>
          <View style={tableBodyItems}>
            <Text>Value</Text>
          </View>
          <View style={tableBodyItems}>
            <Text>Value</Text>
          </View>
          <View style={tableBodyItems}>
            <Text>Value</Text>
          </View>
        </View>
        <View style={tableBody}>
          <View style={tableBodyItems}>
            <Text>Value</Text>
          </View>
          <View style={tableBodyItems}>
            <Text>Value</Text>
          </View>
          <View style={tableBodyItems}>
            <Text>Value</Text>
          </View>
        </View> */}
      </View>

    );
  }
}

styles = {
  container: {
    paddingTop: 20,
    marginHorizontal:10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justiftContent: 'center',
  },

  tableHeaderItems: {
    flex: 1,
    backgroundColor: Colours.button,
    borderWidth: 2,
    borderColor:Colours.text,
    alignItems: 'flex-start',
    fontWeight: 'bold',
  },

  tableBodyItems: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },

}

export { Table }