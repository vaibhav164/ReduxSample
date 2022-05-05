import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../Screens/HomeScreen';
import {Setting} from '../Screens/Setting';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChartScreen} from '../Screens/ChartScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Icon from 'react-native-ionicons';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: '#EFD345',
          tabBarInactiveBackgroundColor: '#F2F2F2',
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export const StackKavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={ChartScreen} />
    </Stack.Navigator>
  );
};
