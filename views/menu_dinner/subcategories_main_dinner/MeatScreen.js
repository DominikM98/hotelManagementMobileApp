import React from 'react';
import{ View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class MeatScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.informationText} > Choose your meat dish </Text>

                <TouchableOpacity style={styles.positionAppetizer}>
                    <Text style={styles.nameAppetizer}> Sirloin steak                            <Text style={styles.priceAppetizer}> 45.00 PLN </Text> </Text>
                    <Text style={styles.descriptionAppetizer}>Sirloin steak, garlic butter, {"\n"} roasted potatoes, and salad mix                  <Text style={styles.weightAppetizer}> Weight: 350 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                    <Text style={styles.nameAppetizer}> Pork tenderloin                       <Text style={styles.priceAppetizer}> 35.00 PLN </Text> </Text>
                    <Text style={styles.descriptionAppetizer}>Pork tenderloin in dried tomatoes {"\n"}
                                                                 and basil, cheese sauce with cream {"\n"}
                                                                 cheese, parsley puree, purple  carrot          <Text style={styles.weightAppetizer}> Weight: 350 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                    <Text style={styles.nameAppetizer}> Chicken fillet                           <Text style={styles.priceAppetizer}> 24.00 PLN </Text> </Text>
                    <Text style={styles.descriptionAppetizer}>Chicken fillet from the oven in saffron {"\n"}
                                                                 sauce creamy, mashed potatoes, {"\n"}
                                                                 green peas, sprouts                                        <Text style={styles.weightAppetizer}> Weight: 320 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                     <Text style={styles.nameAppetizer}> Pork chop                                <Text style={styles.priceAppetizer}> 30.00 PLN </Text> </Text>
                     <Text style={styles.descriptionAppetizer}>Pork chop on the bone, {"\n"} parsley mashed potatoes, broccoli            <Text style={styles.weightAppetizer}> Weight: 450 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                      <Text style={styles.nameAppetizer}> Classic beef burger               <Text style={styles.priceAppetizer}> 30.00 PLN </Text> </Text>
                      <Text style={styles.descriptionAppetizer}>Classic beef burger, lettuce, {"\n"}
                                                                 pickled cucumber, fresh tomato, {"\n"}
                                                                 special sauce, fries                                        <Text style={styles.weightAppetizer}> Weight: 500 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                     <Text style={styles.nameAppetizer}> Extra beef burger                  <Text style={styles.priceAppetizer}> 35.00 PLN </Text> </Text>
                     <Text style={styles.descriptionAppetizer}>Beef burger, becon, onion, cheese,{"\n"}
                                                                 lettuce, pickled cucumber, fresh tomato, {"\n"}
                                                                special sauce, fries                                         <Text style={styles.weightAppetizer}> Weight: 700 g </Text> </Text>
                </TouchableOpacity>
            </View>
        )
    }
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

