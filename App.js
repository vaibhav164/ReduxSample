import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

const App = () => {
  return <Navigator />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'blue',
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
