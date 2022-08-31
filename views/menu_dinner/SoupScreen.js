import React, {useState, useEffect} from 'react';
import{ View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'

export default function SoupScreen ({navigation, route}){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const r = [];
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/restaurant/showItems")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          for(var i = 0; i < result.length; i++){
            if((result[i].type_of_product == 'Soup') == true){
              r.push(result[i]); 
            }
          }
          result = r;
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, )

  if (error) {
    return (console.log("er:", error.message),
    <View style={styles.containerError}>
      <TouchableOpacity style={styles.position} >
        <Text style={styles.messageError}>The server stopped working temporarily</Text>
        <Text style={styles.titleError}>Please try again later</Text>
      </TouchableOpacity>
    </View>);
  } else if (!isLoaded) {
    return isLoaded ? (console.log("is", isLoaded), <Text>TRUE</Text>) : (console.log("i:", items),  <Text>i: {items} </Text>)
  } else {
    return ( console.log(),
      <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.rowViewDetails}>
          <Icon name='arrow-back' color="white" style={styles.icon} onPress={() => navigation.navigate('Restaurant')}/>
          <Text style={styles.informationText} > Choose your soup </Text>
          <Text></Text>
        </View>
            {items.map(item => (
              <TouchableOpacity 
                style={styles.position} 
                onPress={() => navigation.navigate('MoreData', 
                {product_name: item.product_name,
                 product_price: item.product_price,
                 ingredients: item.ingredients,
                 product_weight: item.product_weight,
                 allergens: item.allergens,
                 min_quantity: item.min_quantity,
                 max_quantity: item.max_quantity}) }>
                <View style={styles.nameAndPrice}>
                  <Text style={styles.name}> {item.product_name} </Text>    
                  <Text style={styles.price}> {item.product_price} PLN </Text> 
                </View>
                <View style={styles.descriptionAndWeight}>
                  <Text style={styles.description}> {item.ingredients} </Text>    
                  <Text style={styles.weight}> {item.product_weight} ml </Text> 
                </View>
              </TouchableOpacity>
            ))}
      </ScrollView>
      </View>);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1c1e2b'
  },
  rowViewDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
    width:300
  },
  informationText:{
    color: 'white',
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
  position: {
    backgroundColor: '#4d4dec',
    borderRadius: 5,
    marginTop: 15,
    width: '90%'
  },
  nameAndPrice:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:5
  },
  name: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
  price: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  descriptionAndWeight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5
  },
  description:{
    color: 'white',
    fontSize: 11,
    width:200
  },
  weight: {
    color: 'white',
    fontSize: 11,
  },
  allergensView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5
  },
  allergens:{
    color: 'white',
  },
  icon:{
    marginTop:15
  },
  scrollView:{
    marginHorizontal: 20
  }
});