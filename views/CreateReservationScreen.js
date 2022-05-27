import React, {useState, useEffect} from 'react';
import{ View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Alert, CheckBox} from 'react-native';
import { Icon } from 'react-native-elements'
import DatePicker from 'react-native-datepicker';

export default function CreateReservationScreen({navigation}){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const r = [];
  const [reservation, setReservation] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [rooms, setNoRooms] = useState(0);
  const [people, setNoPeople] = useState(0);
  const [phone, setNoPhone] = useState('');
  const [checkIn, setCheckIn] = useState(new Date().getDate());
  const [checkOut, setCheckOut] = useState(new Date().getDate() + 1);
  const [breakfast, setBreakfast] = useState(false);
  const [breakfastPeople, setBreakfastPeople] = useState(people)
  const [parking, setParking] = useState(false);

  

  useEffect(() => {
    fetch("http://localhost:3000/reservation/createReservation")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          for(var i = 0; i < result.length; i++){
            if((result[i].type_of_product == 'Appetizer') == true){
              r.push(result[i]); 
            }
          }
          result = r;
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

    if(breakfast === true){
      contextMenuHidden = true;
    }
  }, )

  const createReservation = (name, surname, rooms, people, phoneNumber) => {
    fetch('http://localhost:3000/reservation/createReservation', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue'
      })
    });
  }

  const sendReservation = () => {
  }

  if (error) {
    return (console.log("er:", error.message), <Text>Error: {error.message}</Text>);
  } else if (!isLoaded) {
    return isLoaded ? (console.log("is", isLoaded), <Text>TRUE</Text>) : (console.log("i:", items),  <Text>i: {items} </Text>)
  } else {
    return ( 
      <View style={styles.container}>
      <View style={styles.rowView}>
        <Icon name='arrow-back' color="white" style={styles.icon} onPress={() => navigation.goBack()}/>
        <Text style={styles.informationText2} > Make a new reservation </Text>
        <Text></Text>
      </View>

        <Text style={styles.information}> Please complete the data: </Text>

        <View style={styles.rowViewFullName}>
          <View>
            <Text style={styles.informationText}> Name: </Text>
            <TextInput style = {styles.inputName}
              placeholder = "Name"
              placeholderTextColor = "#47517A"
              autoCapitalize = "none"
              color = "white"
              onChangeText = {name => setName(name)}/>
          </View>
         
          <View>
            <Text style={styles.informationTextSurname}> Surname: </Text>
            <TextInput style = {styles.inputSurname}
              placeholder = "Surname"
              placeholderTextColor = "#47517A"
              autoCapitalize = "none"
              color = "white"
              onChangeText = {surname => setSurname(surname)}/>
          </View>
        </View>

        <View style={styles.rowViewCheckInOut}>
          <View>
            <Text style={styles.informationText}> Check in: </Text>
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
            <Text style={styles.informationTextSurname}> Check out: </Text>
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

        <Text style={styles.informationBreakfast}> Do you want breakfast? </Text>
        <View style={styles.rowViewBreakfast}>
          <View>
            <CheckBox
              value={breakfast}
              onValueChange={setBreakfast}
              style={styles.checkbox}
              />
            
            <TextInput style = {styles.inputBreakfast}
              placeholder = "how many?"
              placeholderTextColor = "#47517A"
              autoCapitalize = "none"
              color = "white"
               
              onChangeText = {breakfastPeople => setBreakfastPeople(breakfastPeople)}/>
          </View>
        </View>

        <Text style={styles.informationTextRoom}> Number of rooms: </Text>
        <TextInput style = {styles.inputRoom}
          placeholder = "No of rooms"
          placeholderTextColor = "#47517A"
          autoCapitalize = "none"
          color = "white"
          keyboardType="numeric"
          onChangeText = {room => setNoRooms(room)}/>

        <Text style={styles.informationTextPeople}> Number of people: </Text>
        <TextInput style = {styles.inputPeople}
          placeholder = "No of people"
          placeholderTextColor = "#47517A"
          autoCapitalize = "none"
          color = "white"
          keyboardType="numeric"
          onChangeText = {people => setNoPeople(people)}/>

        <Text style={styles.informationTextNumber}> Phone number: </Text>
        <TextInput style = {styles.inputNumber}
          placeholder = "Phone number"
          placeholderTextColor = "#47517A"
          autoCapitalize = "none"
          color = "white"
          keyboardType="numeric"
          onChangeText = {phone => setNoPhone(phone)}/>

        <View style={styles.reservationView}>
          <TouchableOpacity style={styles.reservationButton} onPress={sendReservation()} >
            <Text style={styles.text}>Make a reservation</Text>
          </TouchableOpacity>
        </View>
      </View>);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e2b'
  },
  rowView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
    width:300,
    borderColor: 'green',
    borderWidth: 1
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
    marginLeft: 5,
    borderColor: 'green',
    borderWidth: 1
  },
  inputName: {
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
  informationTextSurname:{
    color: 'white',
    fontSize: 14,
  },
  inputSurname: {
    backgroundColor: '#22273b',
    color: 'white',
    width: '75%',
    borderRadius: 5,
    fontSize: 15,
  },
  rowViewCheckInOut:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
    width:'95%',
    marginTop: 5,
    marginLeft: 5,
    borderColor: 'green',
    borderWidth: 1
  },
  rowViewBreakfast:{
    flexDirection: 'row',
    margin:1,
    marginLeft: 5,
    width:'95%',
    borderColor: 'green',
    borderWidth: 1
  },
  informationBreakfast:{
    color: 'white',
    fontSize: 14,
    marginLeft: 3,
  },
  checkbox:{
    marginLeft: 3,
    borderColor:'red',
    borderWidth:1
  },
  inputBreakfast:{
    backgroundColor: '#22273b',
    color: 'white',
    width: '75%',
    borderRadius: 5,
    fontSize: 15,
    margin:2,
    borderColor:'red',
    borderWidth:1
  },

  informationTextRoom:{
    color: 'white',
    fontSize: 14,
    position: 'absolute',
    top: 310,
    left:10
  },
  inputRoom: {
    position: 'absolute',
    top: 335,
    backgroundColor: '#22273b',
    width: '95%',
    borderRadius: 5
  },
  informationTextPeople:{
    color: 'white',
    fontSize: 14,
    position: 'absolute',
    top: 400,
    left:10
    },
  inputPeople: {
    position: 'absolute',
    top: 425,
    backgroundColor: '#22273b',
    width: '95%',
    borderRadius: 5
  },
  informationTextNumber:{
    color: 'white',
    fontSize: 14,
    position: 'absolute',
    top: 490,
    left:10
  },
  inputNumber: {
    position: 'absolute',
    top: 515,
    backgroundColor: '#22273b',
    width: '95%',
    borderRadius: 5
  },
  reservationView:{
    position: 'absolute',
    bottom: 20,
    width: '95%',
  },
  reservationButton:{
    backgroundColor: '#4d4dec',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  text:{
    color:'white',
    fontSize: 20
  },
  
});