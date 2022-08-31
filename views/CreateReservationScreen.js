import {useState, useEffect} from 'react';
import{ View, Text, StyleSheet, TouchableOpacity, TextInput, CheckBox} from 'react-native';
import { Icon } from 'react-native-elements'
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreateReservationScreen({navigation}){
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [rooms, setNoRooms] = useState(0);
  const [people, setNoPeople] = useState(0);
  const [phone, setNoPhone] = useState('');
  const [checkIn, setCheckIn] = useState(new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear());
  const [checkOut, setCheckOut] = useState((new Date().getDate()+1)+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear());
  const [breakfast, setBreakfast] = useState(false);
  const [breakfastDecision, setBreakfastDecision] = useState('')
  const [breakfastPeople, setBreakfastPeople] = useState(people)
  const [parking, setParking] = useState(false);
  const [parkingDecision, setParkingDecision] = useState('')
  const [carRegistration, setCarRegistration] = useState('')
  const [moreInformation, setMoreInformation] = useState('')
  const [placeholderNumber, setPlaceholderNumber] = useState('')
  
  useEffect(() => {
    if(breakfast === true){
      setBreakfast(true)
    }

    if(breakfast === true){
      setBreakfastDecision('Yes');
    }else{
      setBreakfastDecision('No');
    }

    if(parking === true){
      setParkingDecision('Yes');
    }else{
      setParkingDecision('No');
    }

     _retrieveData()
  }, )

  async function _retrieveData ()  {
  try {
    setPlaceholderNumber(await AsyncStorage.getItem('login'))  ;
    
    if (placeholderNumber !== null) {
      // We have data!!
      
     console.log(placeholderNumber)
     
    }
  } catch (error) {
    // Error retrieving data
  }
};

  function sendReservation() {
    fetch('http://localhost:3000/mobileReservation/createReservation', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: name,
        last_name: surname,
        check_in: checkIn,
        check_out: checkOut,
        parking: parkingDecision,
        breakfast: breakfastDecision,
        quantity_breakfast: breakfastPeople,
        car_registration: carRegistration,
        number_of_rooms: rooms,
        number_of_people: people,
        phone_number: phone,
        more_information: moreInformation
      })
    });

    navigation.goBack()
  }

  
    return ( 
      <View style={styles.container}>
      <View style={styles.rowViewTitle}>
        <Icon name='arrow-back' color="white" style={styles.icon} onPress={() => navigation.goBack()}/>
        <Text style={styles.informationText2} > Make a new reservation </Text>
        <Text></Text>
      </View>

        <Text style={styles.information}> Please complete the data: </Text>

        <View style={styles.rowViewFullName}>
          <View>
            <Text style={styles.informationText}> Name </Text>
            <TextInput style = {styles.inputFirst}
              placeholder = "Name"
              placeholderTextColor = "#47517A"
              autoCapitalize = "none"
              color = "white"
              onChangeText = {name => setName(name)}/>
          </View>
         
          <View>
            <Text style={styles.informationText}> Surname </Text>
            <TextInput style = {styles.inputSecond}
              placeholder = "Surname"
              placeholderTextColor = "#47517A"
              autoCapitalize = "none"
              color = "white"
              onChangeText = {surname => setSurname(surname)}/>
          </View>
        </View>

        <View style={styles.rowView}>
          <View>
            <Text style={styles.informationText}> Check in </Text>
            <DatePicker
              style={styles.datePickerStyle}
              date={checkIn}
              mode="date"
              placeholder="Select date"
              format="DD/MM/YYYY"
              minDate={checkIn}
              maxDate="31-12-2030"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: -5,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  alignItems: "flex-start",
                  backgroundColor: '#22273b',
                  color: 'white',
                  width: '95%',
                  borderRadius: 5,
                  marginLeft:4,
                  fontSize: 15,
                  borderColor: '#22273b'
                },
                placeholderText: {
                  fontSize: 15,
                  color: "#47517A"
                },
                dateText: {
                  fontSize: 15,
                }
              }}
              onDateChange={(date) => {
                setCheckIn(date);
              }}/>
          </View>
         
          <View>
            <Text style={styles.informationText}> Check out </Text>
            <DatePicker
              style={styles.datePickerStyle}
              date={checkOut}
              mode="date"
              placeholder="Select date"
              format="DD/MM/YYYY"
              minDate={checkOut}
              maxDate="31-12-2030"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: -5,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  alignItems: "flex-start",
                  backgroundColor: '#22273b',
                  color: 'white',
                  width: '95%',
                  borderRadius: 5,
                  marginLeft:4,
                  fontSize: 15,
                  borderColor: '#22273b'
                },
                placeholderText: {
                  fontSize: 15,
                  color: "#47517A"
                },
                dateText: {
                  fontSize: 15,
                }
              }}
              onDateChange={(date) => {
                setCheckIn(date);
              }}/>
          </View>
        </View>

        <View style={styles.rowView}>
          <View>
            <Text style={styles.informationText}> Number of people </Text>
            <TextInput style = {styles.inputFirst}
              placeholder = "Number of people"
              placeholderTextColor = "#47517A"
              autoCapitalize = "none"
              color = "white"
              onChangeText = {people => setNoPeople(people)}/>
          </View>
         
          <View>
            <Text style={styles.informationText}> Number of rooms </Text>
            <TextInput style = {styles.inputSecond}
              placeholder = "Number of rooms"
              placeholderTextColor = "#47517A"
              autoCapitalize = "none"
              color = "white"
              onChangeText = {rooms => setNoRooms(rooms)}/>
          </View>
        </View>
        
        <View style={styles.rowView}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.informationCheckbox}> Do you want breakfast? </Text>
              <CheckBox
                value={breakfast}
                onValueChange={setBreakfast}
                style={styles.checkbox}
                />
            </View>
            
            <Text style={breakfast ? styles.informationCheckbox : {display:'none'}}> How much breakfast? </Text>
            <TextInput style = {breakfast ? styles.inputCheckbox : {display:'none'}}
              placeholderTextColor = "#47517A"
              autoCapitalize = "none"
              color = "white"
              placeholder = {people}
              onChangeText = {breakfastPeople => setBreakfastPeople(breakfastPeople)}/>
          </View>
        </View>

        <View style={styles.rowView}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.informationCheckbox}> Do you want parking? </Text>
              <CheckBox
                value={parking}
                onValueChange={setParking}
                style={styles.checkbox}
                />
            </View>
            
            <Text style={parking ? styles.informationCheckbox : {display:'none'}}> Your car registration </Text>
            <TextInput style = {parking ? styles.inputCheckbox : {display:'none'}}
              placeholderTextColor = "#47517A"
              autoCapitalize = "none"
              color = "white"
              onChangeText = {carRegistration => setCarRegistration(carRegistration)}/>
          </View>
        </View>

        <View style={styles.rowViewPhone}>
          <Text style={styles.informationText}> Phone number </Text>
          <TextInput style = {styles.inputThird}
            placeholder = {placeholderNumber}
            placeholderTextColor = "#47517A"
            autoCapitalize = "none"
            color = "white"
            keyboardType="numeric"
            value = {placeholderNumber}
            onChangeText = {phone => setNoPhone(phone)}/>
        </View>

        <View style={styles.rowViewPhone}>
          <Text style={styles.informationText}> More information <Text style={{color: '#47517A'}}>(Optional)</Text></Text>
          <TextInput style = {styles.inputThird}
            placeholder = "More information"
            multiline = {true}
            numberOfLines = {4}
            placeholderTextColor = "#47517A"
            autoCapitalize = "none"
            color = "white"
            keyboardType="numeric"
            onChangeText = {moreInfo => setMoreInformation(moreInfo)}/>
        </View>

        <View style={styles.reservationView}>
          <TouchableOpacity style={styles.reservationButton} onPress={sendReservation} >
            <Text style={styles.text}>Make a reservation</Text>
          </TouchableOpacity>
        </View>
      </View>);
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e2b'
  },
  rowViewTitle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
    width:300,
  },
  icon: {
    marginTop: 12
  },
  informationText2:{
    marginTop: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  information: {
    marginTop: 25,
    marginLeft: 3,
    color: 'white',
    fontSize: 20
  },
  rowViewFullName:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
    width:'95%',
    marginTop: 20,
    marginLeft: 5
  },
  inputFirst: {
    backgroundColor: '#22273b',
    color: 'white',
    width: '80%',
    borderRadius: 5,
    marginLeft:4,
    fontSize: 15,
  },
  informationText:{
    color: 'white',
    fontSize: 14,
  },
  inputSecond: {
    backgroundColor: '#22273b',
    color: 'white',
    width: '75%',
    borderRadius: 5,
    fontSize: 15,
    marginLeft: 2,
  },
  inputThird:{
    backgroundColor: '#22273b',
    color: 'white',
    width: '95%',
    borderRadius: 5,
    marginLeft: 4,
    fontSize: 15
  },
  rowView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
    width:'95%',
    marginTop: 5,
    marginLeft: 5,
  },
  informationCheckbox:{
    color: 'white',
    fontSize: 14,
    marginTop:3,
  },
  checkbox:{
    marginLeft: 3,
    marginTop:4
  },
  inputCheckbox:{
    backgroundColor: '#22273b',
    color: 'white',
    width: '75%',
    borderRadius: 5,
    fontSize: 15,
    marginTop: 2,
    marginLeft: 7,
  },
  reservationView:{
    marginTop: 15,
    marginLeft: 5,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  reservationButton:{
    backgroundColor: '#4d4dec',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: '100%'
  },
  rowViewPhone:{
    margin:1,
    width:'95%',
    marginTop: 5,
    marginLeft: 5,
  },
  text:{
    color:'white',
    fontSize: 20
  },
  
});