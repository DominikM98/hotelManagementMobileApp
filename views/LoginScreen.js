import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login ({navigation}){
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isNotExist, setIsNotExists] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isShortPhoneNumber, setIsShortPhoneNumber] = useState(false)
  const [value, setValue] = useState('');

  useEffect (()=>{
    if(phoneNumber.length < 9){
      setIsShortPhoneNumber(true)
    }else{
      console.log(phoneNumber.length)
      setIsShortPhoneNumber(false)
    }

    
  })

  async function _storeData(data){
    try {
      await AsyncStorage.setItem(
        'login',
        data
      );

      console.log(AsyncStorage.getItem('login'))
    } catch (error) {
      // Error saving data
    }
  }

  async function checkLoginUser(){
    const response = await fetch('http://localhost:3000/mobileAuth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone_number: phoneNumber,
        password: password
      })
    })
    .then(async res => { 
      try {
        const jsonRes = await res.json();
          if (res.status !== 200) {
            setError(true);
            console.log('error')
            console.log(res.status)
            if(res.status === 404){
              setIsNotExists(true);
            }else if(res.status === 401){
              setIsNotExists(false);
              setIsPassword(true)
            }
          } else {
            setError(false);
            console.log('ok')
            console.log(jsonRes)
            _storeData(phoneNumber)
            navigation.navigate('Menu')
          }
      } catch (err) {
        console.log(err);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }
 
  return (
    <View style={styles.container}>

      <Text style={styles.loginMember}> Login in a member account </Text>
      <View style={styles.viewRegister}>
        <Text style={styles.infoSignUp}> Not a member yet? </Text>
        <Text style={styles.signUp} onPress={() => navigation.navigate('Register')}> Register now </Text> 
      </View>

      <Text style={styles.informationText}> Phone number </Text>
      <TextInput style = {styles.input}
        placeholder = "Phone number"
        placeholderTextColor = "#999999"
        autoCapitalize = "none"
        color = "white"
        onChangeText = {phoneNumber => setPhoneNumber(phoneNumber)}/>
      {!isNotExist ? null : <Text style= {styles.alertText}> The phone number is not exist </Text> }

      <Text style={styles.informationText}> Password: </Text>
      <TextInput style = {styles.input}
        placeholder = "Password"
        placeholderTextColor = "#999999"
        autoCapitalize = "none"
        color = "white"
        secureTextEntry = {true}
        onChangeText = {password => setPassword(password)}/>
      {!isPassword ? null : <Text style= {styles.alertText}> The password is wrong </Text> }  

      { !isShortPhoneNumber ? 
     <TouchableOpacity style = {styles.loginButton} onPress={checkLoginUser}>
        <Text style = {styles.loginButtonText}> Log In </Text>
      </TouchableOpacity>
      :
      <TouchableOpacity style = {styles.loginButton} onPress={checkLoginUser} disabled={true}>
        <Text style = {styles.loginButtonText}> Log In </Text>
      </TouchableOpacity>
      }
      
      
      <View style={styles.viewRegister2}>
        <Text style={styles.signUp} onPress={() => navigation.navigate('ForgotPassword')}> Forgot password? </Text> 
      </View>
      

    </View>
  );  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e2b',
  },
  loginMember: {
    marginTop: '100%',
    marginLeft: '15%',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  informationText:{
    color: 'white',
    fontSize: 14,
    marginTop:10,
    marginLeft: 5,
   },
  input: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#22273b',
    width: '95%',
    fontSize: 15,
    color: 'white'
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#4d4dec',
    padding: 10,
    width: '95%',
    alignItems: 'center',
    marginLeft: 10
  },
  loginButtonText:{
    color:'white',
    fontSize: 20
  },
  viewRegister:{
    flexDirection: 'row',
    marginLeft: '20%',
    marginTop:10,
    marginBottom:10
  },
  viewRegister2:{
    flexDirection: 'row',
    marginLeft: '35%',
    marginTop:10,
  },
  infoSignUp:{
    color: 'white'
  },
  signUp:{
    color: '#4d4dec'
  },
  alertText:{
    color: 'red',
    fontWeight:'bold',
    marginLeft: 5,
    marginTop: 5
  },
});