import React, {useState, useEffect} from 'react';
import{ View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'
import { DataTable } from 'react-native-paper';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ViewReservationScreen({navigation}){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const r = [];
  const [count, setCount] = useState(0);
  const [checkOut, setCheckOut] = useState('');
  const [number, setNumber] = useState('')

  useEffect(() => {
     _retrieveData()
  })

  function compareNumbers(a, b) {
    const check_in = Date.parse(a.check_in);
    return a.check_in - b.check_in;
  }

  async function _retrieveData ()  {
  try {
    setNumber(await AsyncStorage.getItem('login'))  ;
    
    if (number !== null) {
      // We have data!!
      
     console.log(number)
     
    }
  } catch (error) {
    // Error retrieving data
  }
};

  useEffect(() => {
    fetch('http://localhost:3000/reservation/showOneReservation?phone_number='+number, {
      method: "GET"
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
           for(var i = 0; i < result.length; i++){
            const checkOut = new Date(result[i].check_out)
            checkOut.setDate(checkOut.getDate()+1)
            const now = moment().format('YYYY-MM-DD')
            if(new Date(now) < checkOut){
              r.push(result[i]); 
            }
          }
          let sortedDate = r.sort((a,b) => (a.check_in < b.check_in) ? -1 : ((b.check_in > a.check_in) ? 1 : 0))
          result = sortedDate;
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, )

  if (error) {
    return (console.log("er:", error.message),
    <View style={styles.containerError}>
      <TouchableOpacity style={styles.position} >
        <Text style={styles.messageError}>The server stopped working temporarily</Text>
        <Text style={styles.titleError}>Please try again later</Text>
      </TouchableOpacity>
    </View>);
  } else if (!isLoaded) {
    return isLoaded ? (console.log("is", isLoaded), <Text>TRUE</Text>) : (console.log("i:", items),  <Text>i: {items} </Text>)
  } else {
    return ( console.log(items),
      <View style={styles.container}>
       <ScrollView style={styles.scrollView}>
        <View style={styles.rowViewDetails}>
          <Icon name='arrow-back' color="white" style={styles.icon} onPress={() => navigation.goBack()}/>
          <Text style={styles.informationText} > Check your reservation </Text>
          <Text></Text>
        </View>
       
         {items.map(item => (
              <DataTable style={styles.containerTable}>
                <DataTable.Header style={styles.tableHeader}>
                  <DataTable.Title><Text style={styles.titleTable}> Name value </Text></DataTable.Title>
                  <DataTable.Title><Text style={styles.titleTable}> Information </Text></DataTable.Title>
                </DataTable.Header>
                
                  <DataTable.Row style={styles.rowTable}>
                    <DataTable.Cell><Text style={styles.titleTable}>First name</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={styles.colTable}>{item.first_name}</Text></DataTable.Cell>
                  </DataTable.Row> 

                  <DataTable.Row style={styles.rowTable}>
                    <DataTable.Cell><Text style={styles.titleTable}>Last name</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={styles.colTable}>{item.last_name}</Text></DataTable.Cell>
                  </DataTable.Row> 
                  
                  <DataTable.Row style={styles.rowTable}>
                    <DataTable.Cell style={styles.cellTable}><Text style={styles.titleTable}>Check in</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={styles.colTable}>{item.check_in}</Text></DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row style={styles.rowTable}>
                    <DataTable.Cell style={styles.cellTable}><Text style={styles.titleTable}>Check out</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={styles.colTable}>{item.check_out}</Text></DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row style={styles.rowTable}>
                    <DataTable.Cell><Text style={styles.titleTable}>Breakfast</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={styles.colTable}>{item.breakfast}</Text></DataTable.Cell>
                  </DataTable.Row> 

                  <DataTable.Row style={styles.rowTable}>
                    <DataTable.Cell><Text style={styles.titleTable}>Quantity breakfast</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={styles.colTable}>{item.quantity_breakfast}</Text></DataTable.Cell>
                  </DataTable.Row> 
                  
                  <DataTable.Row style={styles.rowTable}>
                    <DataTable.Cell><Text style={styles.titleTable}>Parking</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={styles.colTable}>{item.parking}</Text></DataTable.Cell>
                  </DataTable.Row> 

                  <DataTable.Row style={styles.rowTable}>
                    <DataTable.Cell><Text style={styles.titleTable}>Car registration</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={styles.colTable}>{item.car_registration}</Text></DataTable.Cell>
                  </DataTable.Row> 

                  <DataTable.Row style={styles.rowTable}>
                    <DataTable.Cell><Text style={styles.titleTable}>Room number</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={styles.colTable}>{item.room_number}</Text></DataTable.Cell>
                  </DataTable.Row> 

                  <DataTable.Row style={styles.rowTable}>
                    <DataTable.Cell><Text style={styles.titleTable}>Number of people</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={styles.colTable}>{item.number_of_people}</Text></DataTable.Cell>
                  </DataTable.Row>
                  
                  <DataTable.Row style={styles.rowTable}>
                    <DataTable.Cell><Text style={styles.titleTable}>More information</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={styles.colTable}>{item.more_information}</Text></DataTable.Cell>
                  </DataTable.Row>  

                  <DataTable.Row style={styles.rowTable}>
                    <DataTable.Cell><Text style={styles.titleTable}>Booking price</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={styles.colTable}>{item.booking_price} PLN</Text></DataTable.Cell>
                  </DataTable.Row>  
            </DataTable>))}
        </ScrollView>
          
      </View>);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1c1e2b'
  },
  containerTable: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    width: '95%',
    minWidth: 300
  },
  tableHeader:{
    backgroundColor: '#4848DB',
    width:'95%',
    marginLeft: 'auto-1',
    marginTop: 1,
    borderColor: 'white',
    borderWidth: 1
  },
  titleTable:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  
  },
  rowTable:{
    width:'95%',
    marginLeft: 'auto-1',
     borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#4d4dec',
     flexDirection:'row'
  },
  colTable:{
    color: 'white',
    backgroundColor: '#5151F5',
    
  },
  rowViewDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
    width:300
  },
  scrollView: {
    marginHorizontal: 20,
  },
  informationText:{
    color: 'white',
    marginTop: 14,
    fontSize: 20,
    fontWeight: 'bold'
  },
  icon:{
    marginTop:15
  }
});