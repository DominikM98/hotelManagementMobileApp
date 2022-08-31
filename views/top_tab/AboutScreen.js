import React, {useState, useEffect} from 'react';
import{ View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'

export default function AboutScreen({navigation}){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const r = [];

  useEffect(() => {
    fetch("http://localhost:3000/showInformationHotel")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
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
    return ( console.log(),
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.rowViewDetails}>
            <Icon name='arrow-back' color="white" style={styles.icon} onPress={() => navigation.navigate("Menu")}/>
            <Text style={styles.informationText} > Information about us </Text>
            <Text></Text>
          </View>
          {items.map(item => (
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.position} >
                <View style={styles.borderView}>
                  <View style={styles.titleBorder}> 
                    <Text style={styles.name}> Description </Text>    
                  </View>
                  <Text style={styles.contentBorder}> {item.description} </Text> 
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.position} >
                <View style={styles.borderView}>
                  <View style={styles.titleBorder}> 
                    <Text style={styles.name}> Facilities </Text>    
                  </View>
                  {item.facilities.map(fac => (
                    <Text style={styles.contentBorder}><Icon name='add-circle-outline' color="white" size='15'/> {fac.$name_convenience} </Text> 
                  ))}
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.position} >
                <View style={styles.borderView}>
                  <View style={styles.titleBorder}> 
                    <Text style={styles.name}> Contact with our departament </Text>    
                  </View>
                  {item.contact_with_dept.map(contact => (
                    <View>
                      <View style={{flexDirection: 'row', }}>
                        <Text style={styles.titleDept}> Departament: </Text> 
                        <Text style={styles.nameDept}> {contact.$dept_name} </Text> 
                      </View>
                      {contact.$more_info.map(more => (
                        <View style={styles.moreData}>
                          <Text style={styles.dataDept}><Icon name='person' color="white" size='15'/> {more.$person_name} </Text> 
                          <Text style={styles.dataDept}><Icon name='call' color="white" size='15'/> {more.$phone_number} </Text> 
                          <Text style={styles.dataDept}><Icon name='alternate-email' color="white" size='15'/> {more.$email_address} </Text> 
                        </View>))}
                    </View>))}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.position} >
                  <View style={styles.borderView}>
                    <View style={styles.titleBorder}> 
                      <Text style={styles.name}> Hotel's data </Text>    
                    </View>
                    <View style={{marginLeft: 5}}>
                      <Text style={styles.contentBorder2}>{item.company_data.name_company}</Text> 
                      <Text style={styles.titleAddress}>Address:</Text>
                      {item.company_data.$address_company.map(address => (
                        <View style={styles.moreData}>
                          <Text style={styles.contentBorder}>{address.$street_and_number}</Text>
                          <Text style={styles.contentBorder}>{address.$city}</Text>
                          <Text style={styles.contentBorder}>{address.$postcode}</Text>
                          <Text style={styles.contentBorder}>{address.$country}</Text>
                        </View>))} 
                      <Text style={styles.contentBorder}><Icon name='call' color="white" size='15'/> {item.company_data.phone_number}</Text> 
                      <Text style={styles.contentBorder}><Icon name='print' color="white" size='15'/> {item.company_data.fax_number}</Text> 
                      <Text style={styles.contentBorder}><Icon name='alternate-email' color="white" size='15'/> {item.company_data.email_address}</Text> 
                      <Text style={styles.contentBorder}>NIP: {item.company_data.NIP}</Text> 
                      <Text style={styles.contentBorder}>REGON: {item.company_data.REGON}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
            </View>))}
        </ScrollView>
      </View>);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e2b',
    alignItems: 'center'
  },
  rowViewDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
    width:300
  },
  informationText:{
    color: 'white',
    marginTop: 14,
    fontSize: 20,
    fontWeight: 'bold'
  },
  position: {
    backgroundColor: '#4d4dec',
    borderRadius: 5,
    marginTop: 15,
    width: '90%'
  },
  icon:{
    marginTop:15
  },
  borderView:{
    padding:5
  },
  titleBorder:{
    borderBottomWidth:2,
    borderBottomColor: '#13133B',
  },
  name: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
    paddingBottom:2
  },
  contentBorder:{
    color:'white',
  },
  titleDept:{
    color:'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  nameDept:{
    color:'white',
    fontSize:15
  },
  dataDept:{
    color:'white'
  },
  moreData: {
    marginLeft: 10, 
    marginBottom: 10
  },
  titleAddress:{
    color: 'white',
    fontWeight: 'bold'
  },
  contentBorder2:{
    color: 'white',
    fontSize: 16
  },
   scrollView: {
    marginHorizontal: 20,
  },
});