/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render, fireEvent} from '@testing-library/react-native';

// import renderer from 'react-test-renderer';
import {HomeScreen} from '../src/Screens/HomeScreen';
import {Login} from '../src/Screens/Login';

const {getAllByLabelText, getByText} = render(<Login />);

// it('renders correctly', () => {
//   renderer.create(<Login />);
// });
