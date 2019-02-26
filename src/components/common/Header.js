import React from 'react';
import { Text, Image,View} from 'react-native';
import Colours from '../../constants/Colours';

const Header = ({thumbnail, title, subtitle}) => {
  return (
    <View style={styles.rowContainer}>
      <Image source={{ uri: thumbnail }}
        style={styles.thumbnail}
        resizeMode="contain" 
      />
      
      <View style={styles.rowText}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode={'tail'}>
          {title}
        </Text>
        <Text style={styles.author} numberOfLines={1} ellipsizeMode={'tail'}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}

const styles = {
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: Colours.button,
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowOffset: { width: 1, height: 1, },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colours.text
  },
  author: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: Colours.text
  },
  thumbnail: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
};

export {Header}