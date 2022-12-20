
import React from 'react';
import { StyleSheet } from 'react-native';
import StyledExample from './src/components/styledExample';
import Routes from './src/config/routes';
import Home from './src/screens/home';
import Practice from './src/screens/practice'

const App = () => {
  return (
    <StyledExample />
  )
};

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
  },
});

export default App;
