import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Hot from './subcategories_drink/HotDrinkScreen'
import Cold from './subcategories_drink/ColdDrinkScreen'


const Tab = createMaterialTopTabNavigator();

export default class DrinkScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tab.Navigator tabBarOptions={{
                                        style: { backgroundColor: '#4d4dec', fontWeight: 'bold' },
                                        indicatorStyle: {
                                                  borderBottomColor: 'red',
                                                  borderBottomWidth: 2,
                                         }}}>
                <Tab.Screen name="Hot drinks" component={Hot} />
                <Tab.Screen name="Cold drinks" component={Cold} />

            </Tab.Navigator>
        )
    }
}