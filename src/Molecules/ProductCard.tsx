import React from 'react';
import {Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ProductCard = ({title, URL, getPrice, price}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        getPrice(price);
      }}>
      <View
        style={{
          height: 130,
          justifyContent: 'center',
          alignItems: 'center',
          width: 120,
          backgroundColor: '#EFD345',
          margin: 5,
          borderRadius: 5,
        }}>
        <View>
          <Image
            source={{
              uri: `${URL}`,
            }}
            style={{height: 90, width: 100, borderRadius: 10}}
          />
        </View>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
