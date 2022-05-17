import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, TextInput, BackHandler, Alert} from 'react-native';



export default class MenuScreen extends React.Component {

    backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

   render() {
      return (
        <View style={styles.container}>
           <View style={styles.createReservationView}>
               <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('NewReservation')}>
                   <Text style={styles.text}>Create reservation</Text>
                </TouchableOpacity>
           </View>

           <View style={styles.viewReservationView}>
               <TouchableOpacity style={styles.button} >
                   <Text style={styles.text}>View reservation</Text>
               </TouchableOpacity>
            </View>

           <View style={styles.restaurantView}>
                <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Restaurant')}>
                     <Text style={styles.text}>Restaurant</Text>
                 </TouchableOpacity>
           </View>

          <View style={styles.attractionView}>
               <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Attraction')}>
                   <Text style={styles.text}>Attraction</Text>
               </TouchableOpacity>
           </View>

          <View style={styles.aboutUsView}>
              <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('AboutUs')}>
                  <Text style={styles.text}>About us</Text>
              </TouchableOpacity>
          </View>

           <View style={styles.logOutView}>
                <TouchableOpacity style={styles.button}>
                     <Text style={styles.text} onPress={ this.backAction}>Log out</Text>
                </TouchableOpacity>
            </View>

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
  createReservationView:{
     position: 'absolute',
     top: 230,
     width: '95%',
  },
  button:{
   backgroundColor: '#4d4dec',
   padding: 10,
   alignItems: 'center',
   borderRadius: 5
  },
  viewReservationView:{
    position: 'absolute',
    top: 300,
    width: '95%',
  },
  text:{
    color:'white',
    fontSize: 20
  },
  restaurantView:{
    position: 'absolute',
    top: 370,
    width: '95%',
  },
  attractionView:{
      position: 'absolute',
      top: 440,
      width: '95%',
    },
  aboutUsView:{
        position: 'absolute',
        top: 510,
        width: '95%',
   },
  logOutView:{
        position: 'absolute',
        top: 580,
        width: '95%',
  }
});