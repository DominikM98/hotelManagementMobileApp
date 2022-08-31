import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,Image } from 'react-native';
import { Icon } from 'react-native-elements'

export default function MapScreen({navigation}) {
  
  return (
    <View style={styles.container}>
      <View style={styles.rowViewDetails}>
          <Icon name='arrow-back' color="white" style={styles.icon} onPress={() => navigation.navigate("Menu")}/>
          <Text style={styles.informationText} > We are here: </Text>
          <Text></Text>
      </View>
        <Image source={require('../../image/map.png')} style={styles.imageMap}/>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e2b',
    alignItems: 'center'
  },
  rowViewDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
    width:300
  },
  informationText:{
    color: 'white',
    marginTop: 14,
    fontSize: 20,
    fontWeight: 'bold'
  },
  icon:{
    marginTop:15
  },
  imageMap: {
    width: '90%',
    height: '70%',
    borderRadius: 5,
    marginTop: 20
  }

});
