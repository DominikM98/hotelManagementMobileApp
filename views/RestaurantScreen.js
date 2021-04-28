import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class RestaurantScreen extends React.Component {

   render() {
      return (
          <View style={styles.container}>
            <Text style={styles.informationText}> Welcome to the restaurant </Text>
            <Text style={styles.informationText2}> Please choose your food </Text>


            <TouchableOpacity style={styles.appetizer} onPress={ () => this.props.navigation.navigate('Appetizer')} >
                 <Text style={styles.text}> Appetizer </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.soup} onPress={ () => this.props.navigation.navigate('Soup')}>
                 <Text style={styles.text}> Soup </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.mainCourse} onPress={ () => this.props.navigation.navigate('MainCourse')}>
                 <Text style={styles.text}>  Main Course </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dessert} onPress={ () => this.props.navigation.navigate('Dessert')}>
                <Text style={styles.text}> Dessert </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.drinks} onPress={ () => this.props.navigation.navigate('Drink')}>
                 <Text style={styles.text}> Drink </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.alcohols} onPress={ () => this.props.navigation.navigate('Alcohol')}>
                 <Text style={styles.text}> Alcohol </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discount} onPress={ () => this.props.navigation.navigate('Discount')}>
                 <Text style={styles.text}> Discount </Text>
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
    marginTop: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  informationText2:{
    marginTop: 8,
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold'
  },
  appetizer: {
    backgroundColor: '#22273b',
    width: '40%',
    height: '20%',
    position: 'absolute',
    top: 90,
    left: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  soup: {
    backgroundColor: '#22273b',
    width: '40%',
    height: '20%',
    position: 'absolute',
    top: 90,
    right: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainCourse: {
    backgroundColor: '#22273b',
    width: '40%',
    height: '20%',
    position: 'absolute',
    top: 250,
    left: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dessert: {
    backgroundColor: '#22273b',
    width: '40%',
    height: '20%',
    position: 'absolute',
    top: 250,
    right: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  drinks: {
    backgroundColor: '#22273b',
    width: '40%',
    height: '20%',
    position: 'absolute',
    top: 410,
    left: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  alcohols: {
    backgroundColor: '#22273b',
    width: '40%',
    height: '20%',
    position: 'absolute',
    top: 410,
    right: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  discount: {
    backgroundColor: '#22273b',
    width: '87%',
    height: '10%',
    position: 'absolute',
    top: 570,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  }

});