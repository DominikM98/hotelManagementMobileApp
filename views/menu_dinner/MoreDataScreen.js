import React, {useState, useEffect} from 'react';
import{ View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MoreDataScreen({navigation,route}){
  const [quantity, setQuantity] = useState(0)
  const [basket, setBasket] = useState([]);
  const aa = [];

  const incrementItem  = () => {
    if(quantity >= route.params.max_quantity){
        setQuantity(route.params.max_quantity)
    }else{
      setQuantity(quantity + 1)
    }
  }

  const decreaseItem = () => {
    if(quantity <= route.params.min_quantity){
      setQuantity(route.params.min_quantity)
    }else{
      setQuantity(quantity - 1)
    }
  }

  const addToBasket = async () => {
    const price = route.params.product_price * quantity;
    basket.push({product: route.params.product_name,price: JSON.stringify(price), quantity: JSON.stringify(quantity)})
  
    navigation.navigate('Cart', {product: route.params.product_name, price: price, quantity:quantity});
  
    basket.pop()
  }

const save = async (name) => {
    try {
      const x = await AsyncStorage.getItem('Cart')

      await AsyncStorage.setItem('Cart', name)

      aa.push({name})
    } catch (e) {
      console.error('Failed to save name.', e)
    }
  }

  const load = async () => {
    try {
      const name = await AsyncStorage.getItem('Cart')

      if (name !== null) {
        aa.push({name})
      }

      console.log(name)
    } catch (e) {
      console.error('Failed to load .')
    }
  }
  
  return ( 
    <View style={styles.container}>
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

           <View style={styles.rowView2}>
              <Text style={styles.title}> Quantity:</Text>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.plusButton} onPress={incrementItem}>+</TouchableOpacity>
                <Text style={styles.quantityValue}>{quantity}</Text>
                <TouchableOpacity style={styles.minusButton} onPress={decreaseItem}>-</TouchableOpacity>  
              </View> 
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={addToBasket}>Add to Basket</TouchableOpacity>   
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
  rowView2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 4,
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
  plusButton:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#4d4dec",
    color: 'white',
    width: 35,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  minusButton:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d4dec',
    color: 'white',
    width: 35,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  quantityValue:{
    textAlign:'center',
    marginTop: 5,
    width:30,
    color: 'white',
    borderBottomColor: '#4d4dec',
    borderTopColor: '#4d4dec',
  },
  buttons:{
    flexDirection: 'row',
    width:100,
    height:35
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