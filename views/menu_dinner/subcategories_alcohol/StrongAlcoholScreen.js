import React from 'react';
import{ View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class StrongAlcoholScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.informationText} > Choose your alcohol </Text>

                <TouchableOpacity style={styles.positionDesert}>
                    <Text style={styles.nameDesert}> Jack Daniels                          <Text style={styles.priceDesert}> 12.00 PLN </Text> </Text>
                    <Text style={styles.descriptionDesert}>Original/Apple/Honey                                  <Text style={styles.weightDesert}> Size: 50ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                    <Text style={styles.nameDesert}> Bols                                          <Text style={styles.priceDesert}> 7.00 PLN </Text> </Text>
                    <Text style={styles.descriptionDesert}>Orignial                                                           <Text style={styles.weightDesert}> Size: 50ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                    <Text style={styles.nameDesert}> Pan Tadeusz                           <Text style={styles.priceDesert}> 6.00 PLN </Text> </Text>
                    <Text style={styles.descriptionDesert}>Orginal                                                              <Text style={styles.weightDesert}>Size: 50ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                     <Text style={styles.nameDesert}> Baczyński                              <Text style={styles.priceDesert}> 10.00 PLN </Text> </Text>
                     <Text style={styles.descriptionDesert}>Whisky                                                            <Text style={styles.weightDesert}> Size: 50ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                      <Text style={styles.nameDesert}> Rosolis                                     <Text style={styles.priceDesert}> 8.00 PLN </Text> </Text>
                      <Text style={styles.descriptionDesert}> Vodka                                                             <Text style={styles.weightDesert}> Size: 50ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                     <Text style={styles.nameDesert}> Stock 84                                  <Text style={styles.priceDesert}> 15.00 PLN </Text> </Text>
                     <Text style={styles.descriptionDesert}>Brandy                                                             <Text style={styles.weightDesert}> Size: 50ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                     <Text style={styles.nameDesert}> Jameson                                 <Text style={styles.priceDesert}> 13.00 PLN </Text> </Text>
                     <Text style={styles.descriptionDesert}>Ipa/stout                                                         <Text style={styles.weightDesert}> Size: 50ml </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionDesert}>
                     <Text style={styles.nameDesert}> Dewars                                     <Text style={styles.priceDesert}> 14.00 PLN </Text> </Text>
                     <Text style={styles.descriptionDesert}>4/8/12-year                                                    <Text style={styles.weightDesert}> Size: 50ml </Text> </Text>
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

