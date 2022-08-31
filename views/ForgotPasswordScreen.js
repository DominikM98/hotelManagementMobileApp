    import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert} from 'react-native'
import { Icon } from 'react-native-elements'

export default function ForgotPasswordScreen({navigation}){
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [securityCode, setSecurityCode] = useState('')
  const [error, setError] = useState(null);
  const [isShortPhoneNumber, setIsShortPhoneNumber] = useState(false)
  const [isNotExist, setIsNotExist] = useState(false)
  const [isWrongCode, setIsWrongCode] = useState(false)
  const [isDataGood, setIsDataGood] = useState(true)
  const [isPassword, setIsPassword] = useState(false)
  
  useEffect (()=>{
    if(phoneNumber.length < 9){
      setIsShortPhoneNumber(true)
    }else{
      console.log(phoneNumber.length)
      setIsShortPhoneNumber(false)
    }
  })
    
  async function remindPassword(){
    console.log(phoneNumber,'=',securityCode)
    const response = await fetch('http://localhost:3000/mobileAuth/remindPassword', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone_number: phoneNumber,
        security_code: securityCode
      })
    })
    .then(async res => { 
      try {
        console.log(res)
        const jsonRes = await res.json();
        console.log(jsonRes)
          if (res.status !== 200) {
            setError(true);
             setIsDataGood(false)
            console.log('errors')
            if (res.status === 404) {
              setIsNotExist(true)
              setIsDataGood(true)
            } else if(res.status === 401){
              setIsNotExist(false)
              setIsWrongCode(true)
              setIsDataGood(true)
            }
          } else {
            setError(false);
            setIsNotExist(false)
            setIsWrongCode(false)
            console.log('ok')
            setPassword(jsonRes.password)
            setIsDataGood(false)
          }
      } catch (err) {
        console.log(err);
      }
    })
    .catch(err => {
      console.log(err);
    });
  
    setIsPassword(true)
  }

  function checkPhoneNumber(phoneNumber){
    
  }

  return (
    <View style={styles.container}>
    
      <View style={styles.mainText}>
         <Icon name='arrow-back' color="white" style={styles.icon} onPress={() => navigation.goBack()}/>
        <Text style={styles.loginMember}> Fill the data {"\n"} & {"\n"} get your forgetten password </Text>
      </View>

      <Text style={styles.informationText}> Phone number </Text>
      <TextInput style = {styles.input}
        placeholder = "Phone number"
        placeholderTextColor = "#999999"
        autoCapitalize = "none"
        color = "white"
        onChangeText = {number => setPhoneNumber(number)}/>
       {!isNotExist ? null : <Text style= {styles.alertText}> The phone number is not exist </Text> }  

      <Text style={!isNotExist ? styles.informationText : {display:'none'}}> Security code </Text>
      <TextInput style = {!isNotExist ? styles.input : {display: 'none'}}
        placeholder = "Security 16-digits code"
        placeholderTextColor = "#999999"
        autoCapitalize = "none"
        color = "white"
        onChangeText = {code => setSecurityCode(code)}/>
      {!isWrongCode ? null : <Text style= {styles.alertText}> The security code is wrong </Text> }  
  
      { !isShortPhoneNumber ? 
      <TouchableOpacity style = {styles.loginButton} onPress={remindPassword} >
          <Text style = {styles.loginButtonText}> Remind password </Text>
      </TouchableOpacity> 
      :
      <TouchableOpacity style = {styles.loginButton} onPress={remindPassword} disabled={true}>
          <Text style = {styles.loginButtonText}> Remind password </Text>
      </TouchableOpacity> 
      }
      
      <View style={isPassword? styles.remindPass : styles.remindPass2} >
        <Text style={styles.informationTextRemind}> Your password </Text>
        { !isDataGood ? 
          <TextInput style = {styles.inputPass}
            autoCapitalize = "none"
            color = "white"
            editable = {false}
            value={password}
            />
        : 
          <TextInput style = {styles.inputPassWrong}
          value="ERROR: INVALID DATA"
          autoCapitalize = "none"
          color = "white"
          editable = {false}
          />
        }
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
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainText: {
    flexDirection: 'row',
    justifyContent: 'center', 
    textAlign: 'center',
    marginTop: '60%',
  },
  informationText:{
    color: 'white',
    fontSize: 14,
    marginTop:10,
    marginLeft: 5,
   },
  informationTextRemind:{
    color: 'white',
    fontSize: 14,
    marginTop:10,
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
  remindPass:{
    justifyContent: 'center', 
    textAlign: 'center',
    alignItems: 'center'
  },
  remindPass2:{
    display:'none'
  },
  inputPassWrong:{
    color:'red',
    marginTop:10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputPass:{
    color:'white',
    marginTop:10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});