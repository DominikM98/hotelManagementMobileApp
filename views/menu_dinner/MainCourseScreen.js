import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MeatScreen from './subcategories_main_dinner/MeatScreen'
import FishScreen from './subcategories_main_dinner/FishScreen'
import OtherScreen from './subcategories_main_dinner/OtherScreen'

const Tab = createMaterialTopTabNavigator();

export default class MainCourseScreen extends Component {
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
                <Tab.Screen name="Meat dish" component={MeatScreen} />
                <Tab.Screen name="Fish dish" component={FishScreen} />
                <Tab.Screen name="Other"  component={OtherScreen} />

            </Tab.Navigator>
        )
    }
}