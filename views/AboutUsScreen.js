import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MapScreen from './top_tab/MapScreen'
import ReviewScreen from './top_tab/ReviewScreen'
import AboutScreen from './top_tab/AboutScreen'

const Tab = createMaterialTopTabNavigator();

export default class AboutUsScreen extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <Tab.Navigator tabBarOptions={{
        labelStyle: {fontWeight: 'bold'},
        style: { backgroundColor: '#4d4dec', },
        indicatorStyle: {
          borderBottomColor: '#E08C60',
          borderBottomWidth: 2,
        }}}>
        <Tab.Screen name="About us" component={AboutScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Review"  component={ReviewScreen} />
      </Tab.Navigator>
    )
  }
}