import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert} from 'react-native';

export default class CreateReservationScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            surname: '',
            room: '',
            people: '',
            number: '',
            errorStatus: true,
        }
    }

    onEnterName = (name) => {
        if (name.trim() != 0){
            this.setState({name : name, errorStatus : true})
        }else{
            this.setState({name : name, errorStatus : false})
        }
    }

    onEnterSurname = (surname) => {
        if (surname.trim() != 0){
            this.setState({surname: surname, errorStatus : true})
        }else{
            this.setState({surname: surname, errorStatus : false})
        }
    }

    onEnterRoom = (room) => {
        if (room.trim() != 0){
            this.setState({room : room, errorStatus : true})
        }else{
            this.setState({room : room, errorStatus : false})
        }
    }

    onEnterPeople = (people) => {
        if (people.trim() != 0){
            this.setState({people: people, errorStatus : true})
        }else{
            this.setState({people: people, errorStatus : false})
        }
    }

    handleNumber = (text) => {
        this.setState({ number: text })
    }

    buttonClickListener = () =>{
        const { name, surname, room, people}  = this.state ;
        if (name == "" || surname == "" || room == "" || people == "") {
            Alert.alert("Please enter correct data");
        }else{
            this.props.navigation.navigate('Menu')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.information}> Please complete the data: </Text>
                <Text style={styles.informationText}> Name: </Text>
                <TextInput style = {styles.inputName}
                           placeholder = "Name"
                           placeholderTextColor = "white"
                           autoCapitalize = "none"
                           color = "white"
                           onChangeText = {name => this.onEnterName(name)}/>

                <Text style={styles.informationTextSurname}> Surname: </Text>
                <TextInput style = {styles.inputSurname}
                           placeholder = "Surname"
                           placeholderTextColor = "white"
                           autoCapitalize = "none"
                           color = "white"
                           onChangeText = {surname => this.onEnterSurname(surname)}/>

                <Text style={styles.informationTextRoom}> Number of rooms: </Text>
                <TextInput style = {styles.inputRoom}
                           placeholder = "No of rooms"
                           placeholderTextColor = "white"
                           autoCapitalize = "none"
                           color = "white"
                           keyboardType="numeric"
                           onChangeText = {room => this.onEnterRoom(room)}/>

                <Text style={styles.informationTextPeople}> Number of people: </Text>
                <TextInput style = {styles.inputPeople}
                           placeholder = "No of people"
                           placeholderTextColor = "white"
                           autoCapitalize = "none"
                           color = "white"
                           keyboardType="numeric"
                           onChangeText = {people => this.onEnterPeople(people)}/>

                <Text style={styles.informationTextNumber}> Phone number: </Text>
                <TextInput style = {styles.inputNumber}
                           placeholder = "Phone number"
                           placeholderTextColor = "white"
                           autoCapitalize = "none"
                           color = "white"
                           keyboardType="numeric"
                           onChangeText = {this.handleNumber}/>

                <View style={styles.reservationView}>
                    <TouchableOpacity style={styles.reservationButton} onPress={ this.buttonClickListener} >
                        <Text style={styles.text}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1e2b',
        alignItems: 'center'
    },
    information: {
        position: 'absolute',
        top: 90,
        left: 10,
        color: 'white',
        fontSize: 20
    },
    informationText:{
        color: 'white',
        fontSize: 14,
        position: 'absolute',
        top: 130,
        left: 10
    },
    inputName: {
        position: 'absolute',
        top: 155,
        backgroundColor: '#22273b',
        width: '95%',
        borderRadius: 5
    },
    informationTextSurname:{
        color: 'white',
        fontSize: 14,
        position: 'absolute',
        top: 220,
        left:10
    },
    inputSurname: {
        position: 'absolute',
        top: 245,
        backgroundColor: '#22273b',
        width: '95%',
        borderRadius: 5
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
    }

});