import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import Register from '../screens/register';
import Home from '../screens/home';
import Practice from '../screens/practice';
import Login from '../login';
import ChatScrean from '../screens/chatScreen/chatScreen';

const Stack = createNativeStackNavigator();

const Routes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Connexion'}}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Inscription'}}
       
        />

        <Stack.Screen
          name="Chat"
          component={ChatScrean}
          options={{title: 'Chat'}}
       
        />

        <Stack.Screen
          name="Practice"
          component={Practice}
          options={{title: 'Practice'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
