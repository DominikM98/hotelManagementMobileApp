import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert} from 'react-native'

export default class RegisterScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            errorStatus: true,
        }
    }

    onEnterEmail = (email) => {
        if (email.trim() != 0){
            this.setState({email : email, errorStatus : true})
        }else{
            this.setState({email : email, errorStatus : false})
        }
    }

    onEnterPass = (password) => {
        if (password.trim() != 0){
            this.setState({password: password, errorStatus : true})
        }else{
            this.setState({password: password, errorStatus : false})
        }
    }

    buttonClickListener = () =>{
        const { email, password }  = this.state ;
        if (email == "" || password == "") {
            Alert.alert("Please enter correct data");
        }else{
            this.props.navigation.navigate('Menu')
        }
    }

   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.registerMember}> Register in a member account </Text>

            <Text style={styles.informationText}> Email: </Text>
            <TextInput style = {styles.inputEmail}
                placeholder = "    name@email.com"
                placeholderTextColor = "#999999"
                autoCapitalize = "none"
                color = "white"
                onChangeText = {email => this.onEnterEmail(email)}/>

            <Text style={styles.informationText2}> Password: </Text>
            <TextInput style = {styles.inputPassword}
                placeholder = "    Password"
                placeholderTextColor = "#999999"
                autoCapitalize = "none"
                color = "white"
               // secureTextEntry = {true}
                onChangeText = {password => this.onEnterPass(password)}/>

            <TouchableOpacity style = {styles.createButton} onPress={ this.buttonClickListener}>
                  <Text style = {styles.createButtonText}> Create </Text>
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
  registerMember: {
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
  createButton: {
    position: 'absolute',
    top: 470,
    backgroundColor: '#4d4dec',
    padding: 10,
    width: '100%',
    alignItems: 'center'
  },
  createButtonText:{
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
  textLogin:{
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