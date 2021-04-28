import React from 'react';
import{ View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class ColdDrinkScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.informationText} > Choose your cold drink </Text>

                <TouchableOpacity style={styles.positionHot}>
                    <Text style={styles.nameHot}> Coca Cola                                <Text style={styles.priceHot}> 8.00 PLN </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionHot}>
                    <Text style={styles.nameHot}> 7Up                                           <Text style={styles.priceHot}> 7.00 PLN </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionHot}>
                    <Text style={styles.nameHot}> Mirinda                                    <Text style={styles.priceHot}> 8.00 PLN </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionHot}>
                     <Text style={styles.nameHot}> Still water                              <Text style={styles.priceHot}> 10.00 PLN </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionHot}>
                      <Text style={styles.nameHot}> No still water                         <Text style={styles.priceHot}> 12.00 PLN </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionHot}>
                     <Text style={styles.nameHot}> Iced coffee                            <Text style={styles.priceHot}> 10.00 PLN </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionHot}>
                    <Text style={styles.nameHot}> Lipton                                       <Text style={styles.priceHot}> 8.00 PLN </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionHot}>
                     <Text style={styles.nameHot}> Iced tea                                    <Text style={styles.priceHot}> 7.00 PLN </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionHot}>
                     <Text style={styles.nameHot}> Fruit smoothie                        <Text style={styles.priceHot}> 8.00 PLN </Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.positionHot}>
                    <Text style={styles.nameHot}> Caffee frappe                        <Text style={styles.priceHot}> 10.00 PLN </Text> </Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.positionHot}>
                    <Text style={styles.nameHot}> Cold chocolate                      <Text style={styles.priceHot}> 10.00 PLN </Text> </Text>
               </TouchableOpacity>

              <TouchableOpacity style={styles.positionHot}>
                  <Text style={styles.nameHot}> Homemade lemoniade           <Text style={styles.priceHot}> 7.00 PLN </Text> </Text>
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
    positionHot: {
        backgroundColor: '#4d4dec',
        borderRadius: 5,
        marginTop: 15,
        width: '90%'
    },
    nameHot: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    priceHot: {
        color: 'white',
        fontSize: 18,

    }


});

