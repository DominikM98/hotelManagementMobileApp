import React from 'react';
import{ View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class DessertsScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.informationText} > Choose your dessert </Text>

                <TouchableOpacity style={styles.positionDesert}>
                    <Text style={styles.nameDesert}> Key Lime Pie                          <Text style={styles.priceDesert}> 12.00 PLN </Text> </Text>
                    <Text style={styles.descriptionDesert}>Homemade key lime                                     <Text style={styles.weightDesert}> Weight: 200 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                    <Text style={styles.nameDesert}> Lemon Cake                           <Text style={styles.priceDesert}> 15.00 PLN </Text> </Text>
                    <Text style={styles.descriptionDesert}>A sweet, homemade lemon glaze  {"\n"}cake - served warm                                       <Text style={styles.weightDesert}> Weight: 200 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                    <Text style={styles.nameDesert}> Cheesecake                           <Text style={styles.priceDesert}> 10.00 PLN </Text> </Text>
                    <Text style={styles.descriptionDesert}>Rich and heavenly - ask your {"\n"} service for today is flavours                       <Text style={styles.weightDesert}> Weight: 200 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                     <Text style={styles.nameDesert}> Snickers Pie                           <Text style={styles.priceDesert}> 25.00 PLN </Text> </Text>
                     <Text style={styles.descriptionDesert}>The cany bar now appearin {"\n"} in an ice cream pie                                        <Text style={styles.weightDesert}> Weight: 200 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                      <Text style={styles.nameDesert}> Brownie ice cream                <Text style={styles.priceDesert}> 20.00 PLN </Text> </Text>
                      <Text style={styles.descriptionDesert}> Chocolate brownie ice cream {"\n"}with caramel souce                                       <Text style={styles.weightDesert}> Weight: 200 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                     <Text style={styles.nameDesert}> Deep-fried ice cream           <Text style={styles.priceDesert}> 18.00 PLN </Text> </Text>
                     <Text style={styles.descriptionDesert}>Vanila ice cream in a {"\n"} crispy coating deep                                      <Text style={styles.weightDesert}> Weight: 300 g </Text> </Text>
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
    positionDesert: {
        backgroundColor: '#4d4dec',
        borderRadius: 5,
        marginTop: 15,
        width: '90%'
    },
    nameDesert: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    priceDesert: {
        color: 'white',
        fontSize: 18,

    },
    descriptionDesert:{
        color: 'white',
        fontSize: 14,
        marginLeft: 10
    },
    weightDesert: {
        color: 'white',
        fontSize: 11,

    }

});

