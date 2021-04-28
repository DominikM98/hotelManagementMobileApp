import React from 'react';
import{ View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class FishScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.informationText} > Choose your fish dish </Text>

                <TouchableOpacity style={styles.positionAppetizer}>
                    <Text style={styles.nameAppetizer}> Fish & Chips                           <Text style={styles.priceAppetizer}> 15.00 PLN </Text> </Text>
                    <Text style={styles.descriptionAppetizer}> Angus beef with lettuce, tomato, {"\n"} beetroot, pineapple and egg wtih chips   <Text style={styles.weightAppetizer}> Weight: 300 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                    <Text style={styles.nameAppetizer}> Trout - sygontka                    <Text style={styles.priceAppetizer}> 20.00 PLN </Text> </Text>
                    <Text style={styles.descriptionAppetizer}> Grilled trout with onion, {"\n"} cut parsley and smash potatoes               <Text style={styles.weightAppetizer}> Weight: 300 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                    <Text style={styles.nameAppetizer}> Fisheries tub                          <Text style={styles.priceAppetizer}> 40.00 PLN </Text> </Text>
                    <Text style={styles.descriptionAppetizer}> A dish for two (three types of fried {"\n"}fish, roasted potatoes, steamed veg,
                                                {"\n"}sauces, salad)                                                <Text style={styles.weightAppetizer}> Weight: 300 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                     <Text style={styles.nameAppetizer}> Fried sturgeon                       <Text style={styles.priceAppetizer}> 24.00 PLN </Text> </Text>
                     <Text style={styles.descriptionAppetizer}> Fired sturgeon with bacon {"\n"} and a hint of horseradish                            <Text style={styles.weightAppetizer}> Weight: 300 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                      <Text style={styles.nameAppetizer}> Cod sirlain                              <Text style={styles.priceAppetizer}> 20.50 PLN </Text> </Text>
                      <Text style={styles.descriptionAppetizer}> Cod sirloin with herb crumble on{"\n"} celery puree,
                                                                 thyme sauce, green pea      <Text style={styles.weightAppetizer}> Weight: 200 g </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionAppetizer}>
                     <Text style={styles.nameAppetizer}> Salmon                                    <Text style={styles.priceAppetizer}> 28.00 PLN </Text> </Text>
                     <Text style={styles.descriptionAppetizer}> Oven-baked salmon in dill sauce {"\n"} with french fries                                            <Text style={styles.weightAppetizer}> Weight: 300 g </Text> </Text>
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

