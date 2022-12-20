import React from 'react';
import {View, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import CustomInupt from '../../components/customInput';
import CustomButton from '../../components/customButton';
import { firebase } from '../../firebase';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

const Register = () => {

  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
 
  const RegisterPressed = async (email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      const user = firebase.auth().currentUser;
      console.log('Inscription de : ', user.email)
      .catch((err) => {
        alert(err.message)
      })
      .then(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set({
          email,
          password,
        })
      })
      .catch((err) => {
        alert(err.message)
      })
    })
    .catch((err => {
      alert(err.message)
    }))
  }
  
  return (
    <View style={styles.registering}>
     
     <CustomInupt
        placeholder="Adresse email"
        value={email}
        setValue={setEmail}
        autoCorrect={false}
      />

      <CustomInupt
        placeholder="Mot de passe"
        value={password}
        setValue={setPassword}
        autoCorrect={false}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Se connecter</Text> 
      </TouchableOpacity> 
  
      <CustomButton text="S'inscrire" onPress={() => RegisterPressed(email, password)} />
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
