import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';
import CustomInupt from '../components/customInput';
import CustomButton from '../components/customButton';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const ConnectPressed = () => {
    console.warn('Connexion');
  };

  return (
    <View style={styles.registering}>
      <CustomInupt 
        placeholder="Nom" 
        value={username} 
        setValue={setUsername} 
      />
    
      <CustomInupt
        placeholder="Mot de passe"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomButton text="Se connecter" onPress={ConnectPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  registering: {
    alignItems: 'center',
    padding: 20,
  },
})

export default Login;
