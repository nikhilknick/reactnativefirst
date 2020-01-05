/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import List from './src/screens/List';
import Follow from './src/screens/Follow';
import SignUp from './src/screens/SignUp';

const App = () => {
  return (
    <View style={{ flex: 1}}>
    <List/>
    {/* <Follow/> */}
    {/* <SignUp/> */}
  </View>
  );
};



export default App;
