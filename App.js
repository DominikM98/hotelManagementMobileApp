import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './views/HomeScreen.js';
import LoginScreen from './views/LoginScreen.js';
import RegisterScreen from './views/RegisterScreen.js';
import MenuScreen from './views/MenuScreen.js';
import CreateReservationScreen from  './views/CreateReservationScreen.js';
import RestaurantScreen from './views/RestaurantScreen.js';
import AttractionScreen from './views/AttractionScreen.js';
import AboutUsScreen from './views/AboutUsScreen.js';

import AppetizerScreen from './views/menu_dinner/AppetizerScreen.js';
import SoupScreen from './views/menu_dinner/SoupScreen.js';
import MainCourseScreen from './views/menu_dinner/MainCourseScreen.js';
import DessertsScreen from './views/menu_dinner/DessertsScreen.js';
import DrinkScreen from './views/menu_dinner/DrinkScreen.js';
import AlcoholScreen from './views/menu_dinner/AlcoholScreen.js';
import DiscountScreen from './views/menu_dinner/DiscountScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                        name="Home"
                        component={HomeScreen} />
            <Stack.Screen
                        name="Login"
                        component={LoginScreen}/>
            <Stack.Screen
                        name="Register"
                        component={RegisterScreen} />
            <Stack.Screen
                        name="Menu"
                        component={MenuScreen} />
            <Stack.Screen
                        name="NewReservation"
                        component={CreateReservationScreen} />
            <Stack.Screen
                        name="Restaurant"
                        component={RestaurantScreen} />
            <Stack.Screen
                        name="Attraction"
                        component={AttractionScreen} />
            <Stack.Screen
                        name="AboutUs"
                        component={AboutUsScreen} />
            <Stack.Screen
                        name="Appetizer"
                        component={AppetizerScreen}/>
            <Stack.Screen
                        name="Soup"
                        component={SoupScreen}/>
            <Stack.Screen
                        name="MainCourse"
                        component={MainCourseScreen}/>
            <Stack.Screen
                        name="Dessert"
                        component={DessertsScreen} />
            <Stack.Screen
                        name="Drink"
                        component={DrinkScreen} />
            <Stack.Screen
                        name="Alcohol"
                        component={AlcoholScreen} />
            <Stack.Screen
                        name="Discount"
                        component={DiscountScreen} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}