import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import { Platform } from 'react-native';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ENV from './env.json';

// eslint-disable-next-line
require("firebase/firestore");

const config = {
  apiKey:            ENV.FIREBASE_API_KEY,
  authDomain:        ENV.FIREVASE_AUTH_DOMAIN,
  databaseURL:       ENV.FIREBSE_DB_URL,
  projectId:         ENV.FIREBASE_PRJ_ID,
  storageBucket:     ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

const App = StackNavigator({
  Login:      { screen: LoginScreen },
  Signup:     { screen: SignupScreen },
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
  MemoCreate: { screen: MemoCreateScreen },
}, {
  navigationOptions: {
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerTitle: 'Memott',
    headerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      backgroundColor: '#265366',
      ...Platform.select({
        ios: {
        },
        android: {
        },
      }),
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;

