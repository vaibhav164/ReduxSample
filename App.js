import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Navigator} from './src/Navigation/Navigator';

const App = () => {
  return <Navigator />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'blue',
    paddingHorizontal: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
});

export default App;
