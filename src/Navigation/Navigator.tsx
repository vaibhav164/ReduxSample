import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../Screens/HomeScreen';
import {Setting} from '../Screens/Setting';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChartScreen} from '../Screens/ChartScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../Screens/Login';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Auth = createStackNavigator();
export const Navigator = () => {
  return (
    <NavigationContainer>
      <Auth.Navigator>
        <Auth.Screen name="Login" component={Login} />
      </Auth.Navigator>
    </NavigationContainer>
  );
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cart" component={ChartScreen} />
    </Stack.Navigator>
  );
};
export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: '#C4DDFF',
        tabBarInactiveBackgroundColor: '#1B2430',
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={AuthStackNavigation} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
};
