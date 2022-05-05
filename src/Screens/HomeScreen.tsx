import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
      price: 10,
      url: 'https://www.ratnagirialphonsomango.com/wp-content/uploads/2017/10/buy-ratnagiri-alphonso-mango-e1648136287916.jpg',
    },
    apple: {
      name: 'Apple',
      price: 15,
      url: 'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM=',
    },
    orange: {
      name: 'Orange',
      price: 20,
      url: 'https://4.imimg.com/data4/JJ/MM/MY-36093068/orange-500x500.jpg',
    },
  },
  vegitables: {
    tomato: {
      name: 'Tomato',
      price: 20,
      url: 'https://dictionary.cambridge.org/images/thumb/tomato_noun_001_17860.jpg?version=5.0.239',
    },
    carrot: {
      name: 'Carrot',
      price: 25,
      url: 'https://m.media-amazon.com/images/I/71S6oQqVa5L._SL1500_.jpg',
    },
    cabbage: {
      name: 'Cabbage',
      price: 30,
      url: 'https://media.istockphoto.com/photos/green-cabbage-isolated-on-white-picture-id673162168?k=20&m=673162168&s=612x612&w=0&h=3QKF6zzzCAUL3pKxW6kVbZ7lUt1JUY_SchOUMyOHwhs=',
    },
    chille: {
      name: 'Chillie',
      price: 35,
      url: 'https://www.macmillandictionary.com/external/slideshow/thumb/42142_thumb.jpg',
    },
  },
  milkProduct: {
    cheese: {
      name: 'cheese',
      price: 40,
      url: 'https://cdn.shopify.com/s/files/1/0563/8792/8258/products/processed-cheese-chitale-bandhu-mithaiwale-438982_900x.jpg?v=1629802687',
    },
    Milk: {
      name: 'Milk',
      price: 20,
      url: 'https://i.guim.co.uk/img/media/566197589db441c6b049bb9fee92ee6ad1a25f4a/0_67_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0f6b2779730a1e54d2fc955fab48ac20',
    },
    Butter: {
      name: 'Butter',
      price: 45,
      url: 'https://solidstarts.com/wp-content/uploads/Butter-for-Babies-scaled.jpg',
    },
    curd: {
      name: 'Curd',
      price: 6,
      url: 'https://www.bigbasket.com/media/uploads/p/xxl/225755_8-heritage-curd-premium.jpg',
    },
  },
};

export const HomeScreen = ({navigation}) => {
  const [cost, setCost] = useState(0);
  const handleValue = val => {
    // console.log('Price', val);
    setCost(cost + val);
  };
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#F190B7',
        justifyContent: 'space-evenly',
        borderRadius: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 40, fontWeight: '800', alignSelf: 'flex-start'}}>
          Products
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '800',
              alignSelf: 'flex-start',
            }}>
            Cart{`(${cost})`}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{flex: 1.2}}>
        <View
          style={{
            height: 200,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 30, fontWeight: '800', color: '#B20600'}}>
            Fruits
          </Text>
          <ScrollView horizontal={true}>
            <ProductCard
              title={Obj.fruits.strawberry.name}
              URL={Obj.fruits.strawberry.url}
              price={Obj.fruits.strawberry.price}
              getPrice={handleValue}
            />
            <ProductCard
              title={Obj.fruits.mango.name}
              URL={Obj.fruits.mango.url}
              price={Obj.fruits.mango.price}
              getPrice={handleValue}
            />
            <ProductCard
              title={Obj.fruits.apple.name}
              URL={Obj.fruits.apple.url}
              price={Obj.fruits.apple.price}
              getPrice={handleValue}
            />
            <ProductCard
              title={Obj.fruits.orange.name}
              URL={Obj.fruits.orange.url}
              price={Obj.fruits.orange.price}
              getPrice={handleValue}
            />
          </ScrollView>
        </View>
        <View style={{flex: 0.5, height: 200}}>
          <Text style={{fontSize: 30, fontWeight: '800', color: '#B20600'}}>
            Veggies
          </Text>
          <ScrollView horizontal={true}>
            <ProductCard
              title={Obj.vegitables.carrot.name}
              URL={Obj.vegitables.carrot.url}
              price={Obj.vegitables.carrot.price}
              getPrice={handleValue}
            />
            <ProductCard
              title={Obj.vegitables.cabbage.name}
              URL={Obj.vegitables.cabbage.url}
              price={Obj.vegitables.cabbage.price}
              getPrice={handleValue}
            />
            <ProductCard
              title={Obj.vegitables.tomato.name}
              URL={Obj.vegitables.tomato.url}
              price={Obj.vegitables.tomato.price}
              getPrice={handleValue}
            />
            <ProductCard
              title={Obj.vegitables.chille.name}
              URL={Obj.vegitables.chille.url}
              price={Obj.vegitables.chille.price}
              getPrice={handleValue}
            />
          </ScrollView>
        </View>
        <View style={{flex: 0.4, height: 200}}>
          <Text style={{fontSize: 30, fontWeight: '800', color: '#B20600'}}>
            MilkProducts
          </Text>
          <ScrollView horizontal={true}>
            <ProductCard
              title={Obj.milkProduct.Butter.name}
              URL={Obj.milkProduct.Butter.url}
              price={Obj.milkProduct.Butter.price}
              getPrice={handleValue}
            />
            <ProductCard
              title={Obj.milkProduct.Milk.name}
              URL={Obj.milkProduct.Milk.url}
              price={Obj.milkProduct.Milk.price}
              getPrice={handleValue}
            />
            <ProductCard
              title={Obj.milkProduct.cheese.name}
              URL={Obj.milkProduct.cheese.url}
              price={Obj.milkProduct.cheese.price}
              getPrice={handleValue}
            />
            <ProductCard
              title={Obj.milkProduct.curd.name}
              URL={Obj.milkProduct.curd.url}
              price={Obj.milkProduct.curd.price}
              getPrice={handleValue}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
