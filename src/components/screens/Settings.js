import React, { Component } from 'react';
import { Header, Table } from '../common'
import { View } from 'react-native';
import Colours from '../../constants/Colours';

class Settings extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Header
            thumbnail={'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png'}
            title="View Measurements"
            subtitle="View Measurements"
          />
          <Table />
        </View>
    );
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: Colours.text
  }
}

export default Settings