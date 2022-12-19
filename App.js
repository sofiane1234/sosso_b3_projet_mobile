
import React from 'react';
import { StyleSheet } from 'react-native';
import Routes from './src/config/routes';
import Home from './src/screens/home';
import Practice from './src/screens/practice';

const App = () => {
  return (
    <Routes style={styles.title}/>
  )
};

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
  },
});

export default App;
