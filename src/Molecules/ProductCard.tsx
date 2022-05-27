import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ProductCard = ({
  title,
  URL,
  getPrice,
  price,
  val,
  reducePrice,
}) => {
  const [pressedColor, setPressedColor] = useState('#EFD345');
  const [itemNumber, setItemNumber] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        pressedColor == '#EFD345'
          ? setPressedColor('#D49B54')
          : setPressedColor('#EFD345');
        setItemNumber(!itemNumber);
        {
          pressedColor == '#D49B54' ? getPrice(val, price) : null;
        }
      }}>
      <View
        style={{
          height: 130,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: pressedColor,
          margin: 5,
          borderRadius: 5,
          width: 150,
        }}>
        <View>
          <Image
            source={{
              uri: `${URL}`,
            }}
            style={{height: 90, width: 100, borderRadius: 10}}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          {itemNumber ? (
            <TouchableOpacity
              onPress={() => {
                reducePrice(price);
              }}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <Text style={{color: '#fff', fontSize: 25, fonweight: 'bold'}}>
                  {'-'}
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}

          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
          {itemNumber ? (
            <TouchableOpacity
              onPress={() => {
                getPrice(val, price);
              }}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: 'green',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <Text style={{color: '#fff', fontSize: 25, fonweight: 'bold'}}>
                  {'+'}
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};
