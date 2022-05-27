import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {


   render() {
      return (
         <View style={styles.container}>
            <View style={styles.loginView}>
                <TouchableOpacity style={styles.loginButton} onPress={ () => this.props.navigation.navigate('Login')}>
                     <Text style={styles.text}>Log In</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.registerView}>
                <TouchableOpacity style={styles.registerButton} onPress={ () => this.props.navigation.navigate('Register')} >
                        <Text style={styles.text}>Register</Text>
                 </TouchableOpacity>
            </View>
         </View>
      );
   }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e2b'
  },
  loginView:{
      position: 'absolute',
      bottom: 47,
      width: '100%',
  },
  loginButton:{
    backgroundColor: '#22273b',
    padding: 10,
    alignItems: 'center'
  },
  registerView:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  registerButton:{
    backgroundColor: '#4d4dec',
    padding: 10,
    alignItems: 'center'
  },
  text:{
    color:'white',
    fontSize: 20
  }

});