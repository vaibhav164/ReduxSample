/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {HomeScreen} from '../src/Screens/HomeScreen';

it('renders correctly', () => {
  renderer.create(<HomeScreen />);
});
