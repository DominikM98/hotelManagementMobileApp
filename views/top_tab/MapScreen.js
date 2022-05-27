import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,Image } from 'react-native';

export default class MapScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.text} > We are here:  </Text>
            <Image source={require('../../image/map.png')} style={styles.imageMap}/>
         </View>
      );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e2b',
    alignItems: 'center'
  },
  text:{
    color:'white',
    fontSize: 20,
    marginTop: 20
  },
  imageMap: {
    width: '90%',
    height: '70%',
    borderRadius: 5,
    marginTop: 20
  }

});
