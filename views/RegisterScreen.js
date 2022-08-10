import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert} from 'react-native'
import { Icon } from 'react-native-elements'

export default function RegisterScreen({navigation}){
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUser, setIsUser] = useState(true)
  const [isPassword, setIsPassword] = useState(true)
  const [isEmpty, setIsEmpty] = useState(false);
  const [isEmpty2, setIsEmpty2] = useState(false);
  const [isShortPhoneNumber, setIsShortPhoneNumber] = useState(false)
  const [securityCode, setSecurityCode] = useState('')

  useEffect(() => {
    fetch("http://localhost:3000/mobileAuth/users")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

    if(!phoneNumber.trim()){
      setIsEmpty(true)
    }else{
      setIsEmpty(false)
      if(phoneNumber.length < 9){
        setIsShortPhoneNumber(true)
      }else{
        setIsShortPhoneNumber(false)
      }
    }

    if(!password.trim()){
      setIsEmpty2(true)
    }else{
      if(!confirmPassword.trim()){
        setIsEmpty2(true)
      }else{
        setIsEmpty2(false)
      }
    }
  })

  async function checkLoginUser(){
  
    const response = await fetch('http://localhost:3000/mobileAuth/signup', {
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
          } else {
            setError(false);
            console.log('ok')
            setSecurityCode(jsonRes.security_code)
            takeSecurityCode()
          }
      } catch (err) {
        console.log(err);
      }
    })
    .catch(err => {
      console.log(err);
    });
    
    
  }

  function takeSecurityCode (){
     Alert.alert(
      "Remember this code!",
      "You must provide this code to recover your password, if you lose it, you will lose access to your account: "+securityCode,
      [
        {
          text: "Cancel"
        },
        { text: "OK, I got it!", onPress: () => navigation.navigate('Login') }
      ]
    );

  }

  function checkUser(phoneNo){

    const userPhoneNo = users.find(data => data.phone_number === phoneNo)

    if(userPhoneNo){
      setIsUser(false)
    }else {
      setIsUser(true)
    }
    
    setPhoneNumber(phoneNo);
  }

  function checkConfirmPassword(value){
    
    if (value !== password){
      setIsPassword(false)
    }else{
      setIsPassword(true)
      setConfirmPassword(value)
    }
    
  }

 if (error) {
    return (console.log("er:", error.message),
    <View style={styles.containerError}>
      <TouchableOpacity style={styles.position} >
        <Text style={styles.messageError}>The server stopped working temporarily</Text>
        <Text style={styles.titleError}>Please try again later</Text>
      </TouchableOpacity>
    </View>);
  } else if (!isLoaded) {
    return isLoaded ? (console.log("is", isLoaded), <Text>TRUE</Text>) : (console.log("i:", users),  <Text>i: {users} </Text>)
  } else {
  return (
    <View style={styles.container}>

       <View style={styles.rowViewDetails}>
        <Icon name='arrow-back' color="white" style={styles.icon} onPress={() => navigation.navigate('Restaurant')}/>
        <Text style={styles.informationText} >  Register a member account  </Text>
        <Text></Text>
      </View>
      
      <Text style={styles.informationText}> Phone number </Text>
      <TextInput style = {styles.input}
        placeholder = "Phone number"
        placeholderTextColor = "#999999"
        autoCapitalize = "none"
        color = "white"
        onChangeText  = {phoneNo => checkUser(phoneNo)}/>
      {isUser ? null : <Text style= {styles.alertText}> The phone number is already registred </Text> }
      {!isEmpty ? null : <Text style= {styles.alertText}> Please fill a phone number border </Text> }
      {!isShortPhoneNumber ? null : <Text style= {styles.alertText}> The phone number is too short </Text> }

      <Text style={styles.informationText}> Password </Text>
      <TextInput style = {styles.input}
        placeholder = "Password"
        placeholderTextColor = "#999999"
        autoCapitalize = "none"
        color = "white"
        secureTextEntry = {true}
        onChangeText = {password => setPassword(password)}/>
      {!isEmpty2 ? null : <Text style= {styles.alertText}> Please fill a password border </Text> }
      
      <Text style={styles.informationText}> Confirm password </Text>
      <TextInput style = {styles.input}
        placeholder = "Confirm password"
        placeholderTextColor = "#999999"
        autoCapitalize = "none"
        color = "white"
        secureTextEntry = {true}
        onChangeText = {value => checkConfirmPassword(value)}/>
      {isPassword ? null : <Text style= {styles.alertText}> The password is not same </Text> }
      {!isEmpty2 ? null : <Text style= {styles.alertText}> Please fill a password border </Text> }

      {  !isEmpty && !isEmpty2 && isPassword && isUser && !isShortPhoneNumber ? 
        <TouchableOpacity style = {styles.loginButton} onPress={checkLoginUser} >
          <Text style = {styles.loginButtonText}> Register </Text>
        </TouchableOpacity> 
        :
        <TouchableOpacity style = {styles.loginButton} onPress={checkLoginUser} disabled="true">
          <Text style = {styles.loginButtonText}> Register </Text>
        </TouchableOpacity>  
      }
         
    </View>
  ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e2b',
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
  alertText:{
    color: 'red',
    fontWeight:'bold',
    marginLeft: 5,
    marginTop: 5
  },
  informationText:{
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  rowViewDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
    width:300
  },
  icon:{
    marginTop:10
  },

});