import React, {useState, useEffect} from 'react';
import{ View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';

export default function AppetizerScreen(){
    const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
      const [items, setItems] = useState([]);

      useEffect(() => {
        fetch("http://localhost:3000/restaurant/showItems")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

      if (error) {
        return (console.log("er:", error.message), <Text>Error: {error.message}</Text>);
      } else if (!isLoaded) {
      return isLoaded ? (console.log("is", isLoaded), <Text>TRUE</Text>) : (console.log("i:", items),  <Text>FALSEa</Text> <Text>i: {items} </Text>)
      } else {
        return ( console.log('Yea'),
          /*<ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>*/
          <Text>Working..</Text>

        );
      }
    }

const styles = StyleSheet.create({
    trueStyle: {
        backgroundColor: 'green',
    },
    falseStyle: {
        backgroundColor: 'blue',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1c1e2b'
    },
    informationText:{
        color: 'white',
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    positionAppetizer: {
        backgroundColor: '#4d4dec',
        borderRadius: 5,
        marginTop: 15,
        width: '90%'
    },
    nameAppetizer: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    priceAppetizer: {
        color: 'white',
        fontSize: 18,

    },
    descriptionAppetizer:{
        color: 'white',
        fontSize: 14,
        marginLeft: 10
    },
    weightAppetizer: {
        color: 'white',
        fontSize: 11,

    }

});

/*import React, {useEffect, useState} from 'react';
import{ View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Constants from "expo-constants";

const baseUrl = 'http://192.168.1.111:3000/'

export default function AppetizerScreen() {

const[appetizer, setAppetizer] = useState();

        const fetchApi = async () => {
                try{
                    const res = await axios.get('http://192.168.1.111:3000/restaurant/showItems');
                    const result = res;
                    const {appetizer, status, data} = result;


                }catch (error) {
                    console.log(error.message);
                }
            }

         useEffect(() => {
                fetchApi();
            },[]);

        const handleMessage = (data, type='SUCCESS') => {
            setAppetizer(data);
        }

        return(
            <View style={styles.container}>
                <Text style={styles.informationText} > Choose your appetizer </Text>

                <TouchableOpacity style={styles.positionAppetizer}>
                    <Text style={styles.nameAppetizer}> {appetizer}                               <Text style={styles.priceAppetizer}> 20.00 PLN </Text> </Text>
                    <Text style={styles.descriptionAppetizer}> Grilled country bread with Roma {"\n"} tomatoes, olive oil, garlic, basil                   <Text style={styles.weightAppetizer}> Weight: 300 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                    <Text style={styles.nameAppetizer}> Artichoke and Spinach Dip  <Text style={styles.priceAppetizer}> 17.00 PLN </Text> </Text>
                    <Text style={styles.descriptionAppetizer}> Tuscan bread served with a delicious {"\n"} blend of spinach, artichoke, and cream    <Text style={styles.weightAppetizer}> Weight: 200 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                    <Text style={styles.nameAppetizer}> Raw beef                                  <Text style={styles.priceAppetizer}> 25.00 PLN </Text> </Text>
                    <Text style={styles.descriptionAppetizer}> Beef tartare, dijon mustard, cucumber, {"\n"}chanterelle mushrooms, red onion              <Text style={styles.weightAppetizer}> Weight: 150 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                     <Text style={styles.nameAppetizer}> Stuffed Mushrooms              <Text style={styles.priceAppetizer}> 21.00 PLN </Text> </Text>
                     <Text style={styles.descriptionAppetizer}> Mushrooms caps baked with a filling {"\n"} of three choice cheeses, breadcrumbs {"\n"} and clams                                                         <Text style={styles.weightAppetizer}> Weight: 300 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                      <Text style={styles.nameAppetizer}> Fried Calamari                        <Text style={styles.priceAppetizer}> 30.00 PLN </Text> </Text>
                      <Text style={styles.descriptionAppetizer}> Breaded calamari, lightly fried in oil          <Text style={styles.weightAppetizer}> Weight: 200 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                     <Text style={styles.nameAppetizer}> Four Cheese Garlic Bread    <Text style={styles.priceAppetizer}> 16.50 PLN </Text> </Text>
                     <Text style={styles.descriptionAppetizer}> Toasted French bread topped with {"\n"}romano, cheddar, jack and parmesan, {"\n"}with a light layer of roasted garlic butter    <Text style={styles.weightAppetizer}> Weight: 150 g </Text> </Text>
                </TouchableOpacity>
            </View>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1c1e2b'
    },
    informationText:{
        color: 'white',
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    positionAppetizer: {
        backgroundColor: '#4d4dec',
        borderRadius: 5,
        marginTop: 15,
        width: '90%'
    },
    nameAppetizer: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    priceAppetizer: {
        color: 'white',
        fontSize: 18,

    },
    descriptionAppetizer:{
        color: 'white',
        fontSize: 14,
        marginLeft: 10
    },
    weightAppetizer: {
        color: 'white',
        fontSize: 11,

    }

});

*/