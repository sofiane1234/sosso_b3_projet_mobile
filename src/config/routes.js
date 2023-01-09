import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/register';
import Home from '../screens/home';
import Login from '../screens/login';
import ChatScrean from '../screens/chatscreen';

const Stack = createNativeStackNavigator();

const Routes = props => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Connexion'}}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Accueil'}}
        />

        <Stack.Screen
          name="Chat"
          component={ChatScrean}
          options={{title: 'Chat'}}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Inscription'}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
