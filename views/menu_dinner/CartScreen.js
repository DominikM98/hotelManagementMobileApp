import React, {useState, useEffect} from 'react';
import{ View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { Icon } from 'react-native-elements'
import AsyncStorage, { useAsyncStorage} from '@react-native-community/async-storage';

export default function CartScreen({navigation,route}){
  const [quantity, setQuantity] = useState(0)
  const [basket, setBasket] = useState([])
  const cart = [];
  const aa = [];
 
  useEffect(() => {
    
    cart.push({product: route.params.product, quantity: route.params.quantity, price: route.params.price})
    console.log('cart',JSON.stringify(cart))
    
   // AsyncStorage.setItem('Cart', JSON.stringify(cart))
   
   // AsyncStorage.getItem('Cart').then((value) => cart.push(value))

    save(cart)
    load()
   
   }, [])

   
const load = async () => {
    try {
      const name = await AsyncStorage.getItem('Cart')

      if (name !== null) {
        setBasket(JSON.parse(name))
      }

      console.log('b',JSON.parse(name))
      console.log('aa',basket)
    } catch (e) {
      console.error('Failed to load .')
    }
  }

  const save = async (name) => {
    try {
      await AsyncStorage.setItem('Cart', JSON.stringify(name))

      aa.push({name})
    } catch (e) {
      console.error('Failed to save name.', e)
    }
  }

  return ( 
    <View style={styles.container}>
      <View style={styles.rowViewDetails}>
        <Icon name='arrow-back' color="white" style={styles.icon} onPress={() => navigation.navigate('Restaurant')}/>
        <Text style={styles.informationText} > Your order  </Text>
        <Text></Text>
      </View>
          <View>
            <View style={styles.rowView}>
              <Text style={styles.title}> Product name:</Text>    
              <Text style={styles.title}> Quantity: </Text> 
              <Text style={styles.title}> Price: </Text> 
            </View>

            
            {aa.map(b => (
      <View style={styles.rowView}>
              <Text style={styles.value}> {b.product}</Text>    
              <Text style={styles.title}> {route.params.quantity} </Text> 
              <Text style={styles.title}> {route.params.price} </Text> 
 </View>
             ))}
              
           
            <TouchableOpacity style={styles.submitButton} >Add to Basket</TouchableOpacity>   
          </View>
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
  
  submitButton: {
    backgroundColor: '#4d4dec',
    color: 'white',
    width: 300,
    margin: 'auto',
    padding: 10,
    fontSize: 15,
    marginTop: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    borderRadius: 2,
  }
});