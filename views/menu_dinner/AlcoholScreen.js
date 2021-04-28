import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Weak from './subcategories_alcohol/WeakAlcoholScreen'
import Strong from './subcategories_alcohol/StrongAlcoholScreen'


const Tab = createMaterialTopTabNavigator();

export default class AlcoholScreen extends Component {
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
                <Tab.Screen name="Alcohol < 40%" component={Weak} />
                <Tab.Screen name="Alcohol > 40%" component={Strong} />

            </Tab.Navigator>
        )
    }
}