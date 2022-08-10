import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, TextInput, BackHandler, Alert} from 'react-native';

export default function MenuScreen({navigation}) {

  function backAction(){
     /*Alert.alert(
      "Hold on!",
      "Are you sure you want to go back?",
      [
        {
          text: "Cancel"
        },
        { text: "YES!", onPress: () => navigation.navigate('Home') }
      ]);
*/
      navigation.navigate('Home')
     
   
  }

  return ( 
    <View style={styles.container}>
      <View style={styles.createReservationView}>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('NewReservation')}>
          <Text style={styles.text}>Create reservation</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewReservationView}>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('ViewReservation')}>
          <Text style={styles.text}>View reservation</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.restaurantView}>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Restaurant')}>
          <Text style={styles.text}>Restaurant</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.aboutUsView}>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('AboutUs')}>
          <Text style={styles.text}>About us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logOutView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text} onPress={backAction}>Log out</Text>
        </TouchableOpacity>
      </View>

      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e2b',
    alignItems: 'center'
  },
  createReservationView:{
    marginTop: '80%',
    width: '95%',
  },
  viewReservationView:{
    marginTop:25,
    width: '95%',
  },
  restaurantView:{
    marginTop:25,
    width: '95%',
  },
  aboutUsView:{
    marginTop:25,
    width: '95%',
   },
  logOutView:{
    marginTop:25,
    width: '95%',
  },
  button:{
    backgroundColor: '#4d4dec',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  text:{
    color:'white',
    fontSize: 20
  },
  
});