import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
export const ChartScreen = ({route, navigation}) => {
  const {value} = route.params;
  return (
    <View style={{paddingTop: 40}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
          console.log('sdfsdfsd', value);
        }}>
        <View
          style={{
            width: '25%',
            marginLeft: 20,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>
            {'<- Go Back'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
