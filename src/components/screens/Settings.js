import React, { Component } from 'react';
import { Header, Table } from '../common'
import { View } from 'react-native';

class Settings extends Component {

  render() {
    return (
      <View>
        <Header
          thumbnail={'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png'}
          title="View Measurements"
          subtitle="View Measurements"
        />
        <Table/>
      </View>


    );
  }
}

export default Settings