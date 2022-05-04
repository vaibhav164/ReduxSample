import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../Screens/HomeScreen';
import {Setting} from '../Screens/Setting';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Top = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={TopNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export const TopNavigator = () => {
  return (
    <Top.Navigator>
      <Top.Screen name="Home" component={HomeScreen} />
      <Top.Screen name="Settings" component={Setting} />
    </Top.Navigator>
  );
};
