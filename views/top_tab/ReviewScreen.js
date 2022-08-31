import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {Picker} from '@react-native-picker/picker';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ReviewScreen({navigation}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [more, setMore] = useState('');
  const data = useState([{x: "x"}])
  const [selectedBooking, setSelectedBooking] = useState();
  const [selectedInfo, setSelectedInfo] = useState();
  const [code, setCode] = useState('')
  const [goodStay, setGoodStay] = useState('');
  const [badStay, setBadStay] = useState('');
  const [recommend, setRecommend] = useState('');
  const [recommendCode, setRecommendCode] = useState('')
  const [receptionService, setReceptionService] = useState('')
  const [restaurantService, setRestaurantService] = useState('')
  const [roomService, setRoomService] = useState('')
  const [interiorRoom, setInteriorRoom] = useState('')
  const [equipmentRoom, setEquipmentRoom] = useState('')
  const [number, setNumber] = useState('')
  const [bookingData, setBookingData] = useState('')
  
   useEffect(() => {
    fetch('http://localhost:3000/reservation/showOneReservation?phone_number='+number, {
      method: "GET"
    })
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

   _retrieveData()
    
  }, )

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

  function generateRecommendCode(){
    var code = '';
    var possibleChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(var i = 0; i < 10; i++){
      code += possibleChar.charAt(Math.floor(Math.random()*possibleChar.length))
    }

    setRecommendCode(code)
  }

  function sendReview(){
    fetch('http://localhost:3000/createReviewHotel', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        number_booking: selectedBooking,
        about_hotel: selectedInfo,
        friend_code: code,
        reception_service: receptionService,
        restaurant_service: restaurantService,
        room_service: roomService,
        interior_room: interiorRoom,
        equipment_room: equipmentRoom,
        good_things: goodStay,
        bad_things: badStay,
        recommend: recommend,
        recommend_code: recommendCode,
        more_data: more
      })
    });
  }
  
  if (error) {
    return (console.log("er:", error.message), 
      <View style={styles.containerError}>
       <TouchableOpacity style={styles.position} >
        <Text style={styles.messageError}>The server stopped working temporarily</Text>
        <Text style={styles.titleError}>Please try again later</Text>
       </TouchableOpacity>
      </View>
    );
  } else if (!isLoaded) {
    return isLoaded ? (console.log("is", isLoaded), <Text>TRUE</Text>) : (console.log("i:", items),  <Text>i: {items} </Text>)
  } else {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <View style={styles.rowViewDetails}>
          <Icon name='arrow-back' color="white" style={styles.icon} onPress={() => navigation.navigate("Menu")}/>
          <Text style={styles.informationText} > Please give you rating us: </Text>
          <Text></Text>
      </View>

      <Text style={styles.title}>Select the booking you want to rate: </Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedBooking}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedBooking(itemValue)
        }>
        {items.map(booking => (
            <Picker.Item label={"from "+booking.check_in+ " to "+booking.check_out} value={booking._id} />
        ))}
      </Picker>

      <Text style={styles.title}>How did you find out about the hotel?</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedInfo}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedInfo(itemValue)}>
        <Picker.Item label="Social media" value="social" />
        <Picker.Item label="Internet" value="internet" />
        <Picker.Item label="Friend" value="friend" />
        <Picker.Item label="Other" value="other" />
      </Picker>

      <Text style={styles.title}>How would you rate the professionalizm of the service?</Text>
        <Text style={styles.text}> Reception: </Text>
        <AirbnbRating
          reviews={['Terrible','Bad','Okay','Good','Perfect']}
          size={15}
          defaultRating={0}
          onFinishRating={reception => setReceptionService(reception)}/>

        <Text style={styles.text}> Restaurant: </Text>
        <AirbnbRating
          reviews={['Terrible','Bad','Okay','Good','Perfect']}
          size={15}
          defaultRating={0}
          onFinishRating={rest => setRestaurantService(rest)}/>

        <Text style={styles.text}> Room cleaner: </Text>
        <AirbnbRating
          reviews={['Terrible','Bad','Okay','Good','Perfect']}
          size={15}
          defaultRating={0}
          onFinishRating={room => setRoomService(room)}/>

      <Text style={styles.title}>How do you like the interior of the room?</Text>
      <AirbnbRating
          reviews={['Terrible','Bad','Okay','Good','Perfect']}
          size={15}
          defaultRating={0}
          onFinishRating={interior => setInteriorRoom(interior)}/>

      <Text style={styles.title}>How do you rate the equipment in the room?</Text>
      <AirbnbRating
          reviews={['Terrible','Bad','Okay','Good','Perfect']}
          size={15}
          defaultRating={0}
          onFinishRating={equip => setEquipmentRoom(equip)}/>
      
      <Text style={styles.title}>What did you like the most about your stay?</Text>
      <TextInput style = {styles.inputCode}
          placeholder = "Type there..."
          placeholderTextColor = "#999999"
          autoCapitalize = "none"
          color = "white"
          multiline = {true}
          numberOfLines = {3}
          onChangeText = {good => setGoodStay(good)}/>

      <Text style={styles.title}>What are you dissatisfied with during your stay?</Text>
      <TextInput style = {styles.inputCode}
          placeholder = "Type there..."
          placeholderTextColor = "#999999"
          autoCapitalize = "none"
          color = "white"
          multiline = {true}
          numberOfLines = {3}
          onChangeText = {bad => setBadStay(bad)}/>

      <Text style={styles.title}>Would you recommend our hotel to others?</Text>
      <Picker
        style={styles.picker}
        selectedValue={recommend}
        onValueChange={(itemValue, itemIndex) =>{
          setRecommend(itemValue),
          generateRecommendCode()
        }
        }>
        <Picker.Item label="No" value="no" />
        <Picker.Item label="Yes" value="yes"/>
      </Picker>

      <Text style={styles.title}> More information: </Text>
      <TextInput style = {styles.inputMore}
        placeholder = "Please write more information..."
        placeholderTextColor = "#999999"
        autoCapitalize = "none"
        color = "white"
        multiline={true}
        numberOfLines= {4}
        onChangeText = {more => setMore(more)}/>

        <TouchableOpacity style = {styles.sendButton} >
          <Text style = {styles.sendTextButton} onPress={sendReview}> Send </Text>
        </TouchableOpacity>
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
  containerError:{
    flex: 1,
    backgroundColor: '#1c1e2b',
    alignItems: 'center',
    justifyContent: 'center'
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
  icon:{
    marginTop:15
  },
  title:{
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,

  },
  picker:{
    backgroundColor: '#1c1e2b',
    color:'white',
    width: '90%',
    borderRadius: 5,
    marginTop: 10
  },
  inputCode:{
    marginTop:10,
    width: '90%',
    backgroundColor: '#22273b',
    borderRadius: 5,
    color: 'white',
    marginLeft: 4
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10
  },
  inputMore: {
    marginTop: 10,
    marginLeft: 4,
    backgroundColor: '#22273b',
    borderRadius: 5,
    width:'90%',
    color: 'white'
  },
  sendButton: {
    marginTop:5,
    backgroundColor: '#4d4dec',
    padding: 5,
    width: '95%',
    alignItems: 'center',
    borderRadius: 5,
    height: '10'
  },
  sendTextButton:{
    color:'white',
    fontSize: 20,
  },
  scrollView:{
    marginHorizontal: 20
  },
  position: {
    backgroundColor: '#4d4dec',
    borderRadius: 5,
    width: '80%',
    height: '30%',
    paddingTop: 2,
    paddingBottom:2,
    justifyContent: 'center',
    
    textAlign: 'center'
  },
  titleError:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10
  },
  messageError:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});