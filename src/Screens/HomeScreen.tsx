import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {ProductCard} from '../Molecules/ProductCard';

const Obj = {
  fruits: {
    strawberry: {
      name: 'StrawBerry',
      price: 5,
      url: 'https://image.shutterstock.com/image-photo/strawberry-clipping-path-fruit-leaf-600w-1938974704.jpg',
    },
    mango: {
      name: 'Mango',
      price: 5,
      url: 'https://www.ratnagirialphonsomango.com/wp-content/uploads/2017/10/buy-ratnagiri-alphonso-mango-e1648136287916.jpg',
    },
    apple: {
      name: 'Apple',
      price: 5,
      url: 'https://4.imimg.com/data4/JJ/MM/MY-36093068/orange-500x500.jpg',
    },
    orange: {
      name: 'Orange',
      price: 5,
      url: 'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM=',
    },
  },
};
export const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#FEFBE7',
        justifyContent: 'space-evenly',
      }}>
      <Text style={{fontSize: 40, fontWeight: '800'}}>Products</Text>
      <ScrollView style={{flex: 1.2}}>
        <View
          style={{
            flex: 0.4,
            backgroundColor: '#B4E197',
            height: 160,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 30, fontWeight: '800'}}>Fruits</Text>
          <ScrollView horizontal={true}>
            <ProductCard
              title={Obj.fruits.strawberry.name}
              URL={Obj.fruits.strawberry.url}
            />
            <ProductCard
              title={Obj.fruits.mango.name}
              URL={Obj.fruits.mango.url}
            />
            <ProductCard
              title={Obj.fruits.apple.name}
              URL={Obj.fruits.apple.url}
            />
            <ProductCard
              title={Obj.fruits.orange.name}
              URL={Obj.fruits.orange.url}
            />
          </ScrollView>
        </View>
        <View style={{flex: 0.4, backgroundColor: '#B4E197'}}>
          <Text style={{fontSize: 30, fontWeight: '800'}}>Pulses</Text>
          <ProductCard title="Plane" />
        </View>
        <View style={{flex: 0.4, backgroundColor: '#B4E197'}}>
          <Text style={{fontSize: 30, fontWeight: '800'}}>MilkProducts</Text>
          <ProductCard title="Plane" />
        </View>
        <View style={{flex: 0.4, backgroundColor: '#B4E197'}}>
          <Text style={{fontSize: 30, fontWeight: '800'}}>MilkProducts</Text>
          <ProductCard title="Plane" />
        </View>
      </ScrollView>
    </View>
  );
};
