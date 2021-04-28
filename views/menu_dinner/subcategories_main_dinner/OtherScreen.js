import React from 'react';
import{ View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Other extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.informationText} > Choose your dish </Text>

                <TouchableOpacity style={styles.positionOther}>
                    <Text style={styles.nameOther}> Roman salad                           <Text style={styles.priceOther}> 20.00 PLN </Text> </Text>
                    <Text style={styles.descriptionOther}>Roman salad with beef tenderloin {"\n"}
                                                           and bacon, garlic-mustard sauce                <Text style={styles.weightOther}> Weight: 300 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionOther}>
                    <Text style={styles.nameOther}> Mediterranean salad             <Text style={styles.priceOther}> 22.00 PLN </Text> </Text>
                    <Text style={styles.descriptionOther}>Selection of salads, cherry tomatoes,{"\n"}
                                                            green olives, mozzarella                                <Text style={styles.weightOther}> Weight: 300 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionOther}>
                    <Text style={styles.nameOther}> Tagliatelle with salmon         <Text style={styles.priceOther}> 27.00 PLN </Text> </Text>
                    <Text style={styles.descriptionOther}>Tagliatelle with salmon, fresh spinach,{"\n"} cream and lemon sauce                                <Text style={styles.weightOther}> Weight: 300 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionOther}>
                     <Text style={styles.nameOther}> Papardelle with chicken        <Text style={styles.priceOther}> 25.00 PLN </Text> </Text>
                     <Text style={styles.descriptionOther}>Papardelle with chicken, arugula, {"\n"} chilli, and red pesto                                         <Text style={styles.weightOther}> Weight: 300 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionOther}>
                      <Text style={styles.nameOther}> Russian dumplings                 <Text style={styles.priceOther}> 15.00 PLN </Text> </Text>
                      <Text style={styles.descriptionOther}> Russian dumplings with fried onion             <Text style={styles.weightOther}> Weight: 300 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionOther}>
                     <Text style={styles.nameOther}> Sweet pancakes                      <Text style={styles.priceOther}> 14.00 PLN </Text> </Text>
                     <Text style={styles.descriptionOther}>Pancakes with cheese and{"\n"}
                                                            sauce chocolate                                                <Text style={styles.weightOther}> Weight: 300 g </Text> </Text>
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
    positionOther: {
        backgroundColor: '#4d4dec',
        borderRadius: 5,
        marginTop: 15,
        width: '90%'
    },
    nameOther: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    priceOther: {
        color: 'white',
        fontSize: 18,

    },
    descriptionOther:{
        color: 'white',
        fontSize: 14,
        marginLeft: 10
    },
    weightOther: {
        color: 'white',
        fontSize: 11,

    }

});

