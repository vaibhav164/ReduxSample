import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {Navigator} from './src/Navigation/Navigator';
const App = () => {
  const [publishableKey, setPublishableKey] = useState('');

  const fetchPublishableKey = async () => {
    const key = await fetchKey(); // fetch key from your server here
    setPublishableKey(key);
  };

  useEffect(() => {
    fetchPublishableKey();
  }, []);
  return <Navigator />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'blue',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '500',
  },
});

export default App;
