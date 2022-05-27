import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class AboutScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.aboutText}>
                The hotel is located in the center of Wrocław. {"\n"}
                We are only 500 meters from the main square.{"\n"}
                There is a shopping mall on the other side of the street.{"\n"}
                We have a large underground car park at your disposal.{"\n"}
                There is a taxi rank right at the exit. For more information, visit our website or call: <Text style={{color: 'red'}}>14 119 90 16</Text>
            </Text>
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
  aboutText:{
    color:'white',
    fontSize: 25,
    textAlign: 'center',
    position: 'absolute',
    top: 120
  }

});