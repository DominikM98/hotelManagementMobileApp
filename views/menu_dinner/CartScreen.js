import React, {useState, useEffect} from 'react';
import{ View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartScreen({navigation}){
  const [quantity, setQuantity] = useState(0)
  const [basket, setBasket] = useState([])
  const [value, setValue] = useState([])
  
  useEffect(() => {



    fetchData()
    
    _retrieveData(value)
   }, [value])

  async function fetchData(){
    setValue(await AsyncStorage.getItem('key'));
    console.log('v: ',value)
  }

  function _retrieveData (val)  {
    try {

      console.log('value',  val);

      if(val){
        basket.push(JSON.parse(val))
        console.log('if:', basket)
      } else {
        setBasket([])
        console.log('else: ', basket)
      }
  
   setTimeout(() => {console.log('basket ', basket)},3000)
    } catch (error) {
      // Error retrieving data
    } 
  }
 
  async function sendOrder(){
    AsyncStorage.removeItem('key');
    navigation.navigate('Restaurant')
  }

  function basketMap(){
    setTimeout(() => {console.log('BA:',basket[0][0])},3000)
    console.log('B:',basket[0])
    console.log('typeof',typeof basket[0])
  

    return (basket.map((data) => {
      return(
        data.map((more, index) => { 
          return(console.log(more),<Text key={index}>g</Text>)})
      )
    }))
  }

  return ( 
    <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
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

            
            <Text style={styles.text}>c</Text>
            {basket.map(data => {
              data.map( (more,i) => { console.log('name:',more.product),
                <Text key={i} style={styles.text}> a </Text>
              })
            })}
              

            <TouchableOpacity style={styles.submitButton} onPress={sendOrder}>Order</TouchableOpacity>   
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
  },
  scrollView:{
    marginHorizontal:20
  },
  text:{color:'red', fontWeight: 'bold',marginTop: 10}
});