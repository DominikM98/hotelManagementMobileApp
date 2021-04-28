import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class ReviewScreen extends React.Component {
    state = {
        more: ''
    }
    handleMore = (text) => {
          this.setState({ more: text })
    }

   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.informationText}> Please give you rating us:  </Text>

            <Text style={styles.text}> Service: </Text>
            <AirbnbRating size={25}/>

            <Text style={styles.text}> Rooms: </Text>
            <AirbnbRating size={25}/>

            <Text style={styles.text}> App: </Text>
            <AirbnbRating size={25}/>

            <Text style={styles.informationText}> More information: </Text>
            <TextInput style = {styles.inputMore}
                 placeholder = "Please write more information..."
                 placeholderTextColor = "#999999"
                 autoCapitalize = "none"
                 color = "white"
                 numberOfLines= {4}
                 nChangeText = {this.handleEmail}/>


            <TouchableOpacity style = {styles.sendButton} >
                 <Text style = {styles.sendTextButton}> Log In </Text>
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
  informationText:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20
  },
  inputMore: {
    marginTop: 10,
    backgroundColor: '#22273b',
    borderRadius: 5,
    width:'95%'
  },
  sendButton: {
     marginTop:5,
     backgroundColor: '#4d4dec',
     padding: 10,
     width: '95%',
     alignItems: 'center',
     borderRadius: 5
  },
  sendTextButton:{
    color:'white',
    fontSize: 20
  }
});