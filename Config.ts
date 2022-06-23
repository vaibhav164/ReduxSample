import {Platform} from 'react-native';

export const API_URL =
  Platform.OS === 'android' ? 'http://127.0.0.8081' : 'http://127.0.0.8081';
