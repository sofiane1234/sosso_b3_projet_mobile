import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FirebaseApp} from '@firebase/app';
import {useState} from 'react';
import CustomInupt from '../../components/customInput';
import CustomButton from '../../components/customButton';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [email, setEmail] = useState('');
  const RegisterPressed = () => {
    console.warn('Inscription');
  };

  return (
    <View style={styles.registering}>
      <CustomInupt 
            placeholder="Nom" 
            value={username} 
            setValue={setUsername} 
        />
      
      <CustomInupt
        placeholder="Adresse email"
        value={email}
        setValue={setEmail}
      />

      <CustomInupt
        placeholder="Mot de passe"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomInupt
        placeholder="Confirmer Mot de passe"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry
      />

      <CustomButton text="S'inscrire" onPress={RegisterPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  registering: {
    alignItems: 'center',
    padding: 20,
  },
});
export default Register;
