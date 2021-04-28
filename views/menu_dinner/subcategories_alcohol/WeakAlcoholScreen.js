import React from 'react';
import{ View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class WeakAlcoholScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.informationText} > Choose your alcohol </Text>

                <TouchableOpacity style={styles.positionDesert}>
                    <Text style={styles.nameDesert}> Desperados                          <Text style={styles.priceDesert}> 10.00 PLN </Text> </Text>
                    <Text style={styles.descriptionDesert}>Original/Red/Mojito/Lime/Strawberry  <Text style={styles.weightDesert}> Size: 500ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                    <Text style={styles.nameDesert}> Lech                                         <Text style={styles.priceDesert}> 8.00 PLN </Text> </Text>
                    <Text style={styles.descriptionDesert}>Orignial/Free/Chmiele                                 <Text style={styles.weightDesert}> Size: 500ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                    <Text style={styles.nameDesert}> Paulaner                                <Text style={styles.priceDesert}> 12.00 PLN </Text> </Text>
                    <Text style={styles.descriptionDesert}>Bottled/draught                                             <Text style={styles.weightDesert}>Size: 500ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                     <Text style={styles.nameDesert}> Piemonte Rosato                   <Text style={styles.priceDesert}> 8.00 PLN </Text> </Text>
                     <Text style={styles.descriptionDesert}>Luca Bosio                                                       <Text style={styles.weightDesert}> Size: 150ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                      <Text style={styles.nameDesert}> Martini                                   <Text style={styles.priceDesert}> 40.00 PLN </Text> </Text>
                      <Text style={styles.descriptionDesert}> Prosecco                                                     <Text style={styles.weightDesert}> Size: 750ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                     <Text style={styles.nameDesert}> Campo Castillo                      <Text style={styles.priceDesert}> 7.00 PLN </Text> </Text>
                     <Text style={styles.descriptionDesert}>White/Red                                                        <Text style={styles.weightDesert}> Size: 150ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                     <Text style={styles.nameDesert}> Moet & Chandon                <Text style={styles.priceDesert}> 250.00 PLN </Text> </Text>
                     <Text style={styles.descriptionDesert}> Brut                                                          <Text style={styles.weightDesert}> Size: 750ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                     <Text style={styles.nameDesert}> Soplica                                     <Text style={styles.priceDesert}> 7.00 PLN </Text> </Text>
                     <Text style={styles.descriptionDesert}>Strawberry/blueberry/apricot/nutty          <Text style={styles.weightDesert}> Size: 50ml </Text> </Text>
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

