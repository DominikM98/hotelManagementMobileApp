import React from 'react';
import{ View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class AppetizerScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.informationText} > Choose your appetizer </Text>

                <TouchableOpacity style={styles.positionAppetizer}>
                    <Text style={styles.nameAppetizer}> Bruschetta                               <Text style={styles.priceAppetizer}> 20.00 PLN </Text> </Text>
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

