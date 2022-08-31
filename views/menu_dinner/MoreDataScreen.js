import React, {useState, useEffect} from 'react';
import{ View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MoreDataScreen({navigation,route}){

  return ( 
    <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <View style={styles.rowViewDetails}>
        <Icon name='arrow-back' color="white" style={styles.icon} 
          onPress={() => navigation.goBack()}/>
        <Text style={styles.informationText} > More Details  </Text>
        <Text></Text>
      </View>
          <View>
            <Text style={styles.title}> Product name:</Text>    
            <Text style={styles.value}> {route.params.product_name} </Text> 

            <Text style={styles.title}> Ingredients:</Text>    
            <Text style={styles.value}> {route.params.ingredients}</Text> 

            <Text style={styles.title}> Allergens:</Text>    
            <Text style={styles.value}> {route.params.allergens} </Text> 

            <View style={styles.rowView}>
              <Text style={styles.title}> Product price:</Text>    
              <Text style={styles.title}> Product weight: </Text> 
            </View>

            <View style={styles.rowView}>
              <Text style={styles.value}> {route.params.product_price} PLN</Text>    
              <Text style={styles.value}> {route.params.product_weight} g </Text> 
            </View>

          </View>
    </ScrollView>
    </View>);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1c1e2b'
  },
  informationText:{
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  rowView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 1,
    width:300
  },
  rowViewDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
    width:300
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
    marginTop:2,
    width:300,
    margin:'auto'
  },
  value: {
    color: 'white',
    fontSize: 15,
    marginTop: 2,
    width:300,
    margin:'auto'
  },
  icon:{
    marginTop:10
  },
  scrollView:{
    marginHorizontal:20
  }
});