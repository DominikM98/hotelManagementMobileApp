import React from 'react';
import{ View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class SoupScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.informationText} > Choose your soup </Text>

                <TouchableOpacity style={styles.positionSoup}>
                    <Text style={styles.nameSoup}> Chicken soup                          <Text style={styles.priceSoup}> 10.00 PLN </Text> </Text>
                    <Text style={styles.descriptionSoup}> Vegetable - chicken noodle soup                <Text style={styles.weightSoup}> Weight: 200 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionSoup}>
                    <Text style={styles.nameSoup}> Brown onion mutton soup    <Text style={styles.priceSoup}> 15.00 PLN </Text> </Text>
                    <Text style={styles.descriptionSoup}> Mutton, onion caramelized spicy soup      <Text style={styles.weightSoup}> Weight: 150 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionSoup}>
                    <Text style={styles.nameSoup}> Minestrone chicken soup     <Text style={styles.priceSoup}> 20.00 PLN </Text> </Text>
                    <Text style={styles.descriptionSoup}> A thick italian soup made with {"\n"} veg/chicken and pasta                                  <Text style={styles.weightSoup}> Weight: 150 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionSoup}>
                     <Text style={styles.nameSoup}> Garden soup                           <Text style={styles.priceSoup}> 12.00 PLN </Text> </Text>
                     <Text style={styles.descriptionSoup}> Clear soup with choice of {"\n"} veg/chicken/mutton                                     <Text style={styles.weightSoup}> Weight: 140 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionSoup}>
                      <Text style={styles.nameSoup}> Crab and pepper soup          <Text style={styles.priceSoup}> 30.00 PLN </Text> </Text>
                      <Text style={styles.descriptionSoup}> Pepper flavoured with crab                         <Text style={styles.weightSoup}> Weight: 170 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionSoup}>
                     <Text style={styles.nameSoup}> Seafood coconut                   <Text style={styles.priceSoup}> 25.00 PLN </Text> </Text>
                     <Text style={styles.descriptionSoup}> Fusion soup with coconut {"\n"} and  seafood mix                                           <Text style={styles.weightSoup}> Weight: 170 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionSoup}>
                     <Text style={styles.nameSoup}> Tomatoe soup                         <Text style={styles.priceSoup}> 11.00 PLN </Text> </Text>
                     <Text style={styles.descriptionSoup}> Tomatoe soup with pasta/rice                    <Text style={styles.weightSoup}> Weight: 170 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionSoup}>
                     <Text style={styles.nameSoup}> Soup of a day                          <Text style={styles.priceSoup}> 12.00 PLN </Text> </Text>
                     <Text style={styles.descriptionSoup}> Ask the staff                                                   <Text style={styles.weightSoup}> Weight: 170 g </Text> </Text>
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
    positionSoup: {
        backgroundColor: '#4d4dec',
        borderRadius: 5,
        marginTop: 15,
        width: '90%'
    },
    nameSoup: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    priceSoup: {
        color: 'white',
        fontSize: 18,

    },
    descriptionSoup:{
        color: 'white',
        fontSize: 14,
        marginLeft: 10
    },
    weightSoup: {
        color: 'white',
        fontSize: 11,

    }

});

