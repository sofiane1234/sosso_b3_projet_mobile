
import React from 'react';
import { StyleSheet } from 'react-native';
import StyledExample from './src/components/styledExample/styledExample';
import Routes from './src/config/routes';
import Home from './src/screens/home';
import Practice from './src/screens/practice'
import { ThemeProvider } from 'styled-components';
import theme from './src/config/theme';

const App = () => {
  return (
   <Routes />
  )
};

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
  },
});

export default App;
