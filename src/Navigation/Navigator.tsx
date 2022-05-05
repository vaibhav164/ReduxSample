import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../Screens/HomeScreen';
import {Setting} from '../Screens/Setting';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// import Icon from 'react-native-ionicons';
import {Icon} from 'react-native-vector-icons';
const Top = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: '#EFD345',
          tabBarInactiveBackgroundColor: '#F2F2F2',
        }}>
        <Tab.Screen
          //   style={{tabBarActiveBackgroundColor: 'red'}}
          options={{
            tabBarIcon: () => {
              <Icon name="home" size={40} color="red" />;
              //   <Icon ios="rocket" />;
            },
          }}
          name="Home"
          component={HomeScreen}
        />
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
