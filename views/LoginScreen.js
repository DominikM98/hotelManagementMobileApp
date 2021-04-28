import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image } from 'react-native';

export default class Login extends React.Component {
    state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }

   render() {
      return (
         <View style={styles.container}>

            <Text style={styles.loginMember}> Login in a member account </Text>

            <Text style={styles.informationText}> Email: </Text>
            <TextInput style = {styles.inputEmail}
                placeholder = "    name@email.com"
                placeholderTextColor = "#999999"
                autoCapitalize = "none"
                color = "white"
                onChangeText = {this.handleEmail}/>

            <Text style={styles.informationText2}> Password: </Text>
            <TextInput style = {styles.inputPassword}
                placeholder = "    Password"
                placeholderTextColor = "#999999"
                autoCapitalize = "none"
                color = "white"
               // secureTextEntry = {true}
                onChangeText = {this.handlePassword}/>

            <TouchableOpacity style = {styles.loginButton} onPress={ () => this.props.navigation.navigate('Menu')}>
                  <Text style = {styles.loginButtonText}> Log In </Text>
            </TouchableOpacity>
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
   imageStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
  loginMember: {
    position: 'absolute',
    top: 230,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputEmail: {
    position: 'absolute',
    top: 310,
    backgroundColor: '#22273b',
    width: '100%',
  },
  inputPassword: {
    position: 'absolute',
    top: 400,
    backgroundColor: '#22273b',
    width: '100%',
  },
  loginButton: {
    position: 'absolute',
    top: 470,
    backgroundColor: '#4d4dec',
    padding: 10,
    width: '100%',
    alignItems: 'center'
  },
  loginButtonText:{
    color:'white',
    fontSize: 20
  },
  textOr:{
    color: 'white',
    fontSize: 15,
    position: 'absolute',
    bottom: 0,
    left:170
  },
  textCreate:{
    color: 'red',
    fontSize: 15,
    position: 'absolute',
    bottom: 0,
    left: 190
  },
  informationText:{
      color: 'white',
      fontSize: 14,
      position: 'absolute',
      top: 285,
      left: 15
   },
   informationText2:{
      color: 'white',
      fontSize: 14,
      position: 'absolute',
      top: 375,
      left: 15
   }

});