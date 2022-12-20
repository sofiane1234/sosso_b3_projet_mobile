import React, { useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {useState} from 'react';
import CustomInupt from '../../components/customInput';
import CustomButton from '../../components/customButton';
import {firebase} from '../../firebase';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home")
      }
    })
    return unsubscribe;
  }, [])

  const ConnectPressed = () => {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        navigation.navigate('Home')
        console.log('connexion en tant que : ', user.email);
      })
      .catch(err => alert(err.message));
  };

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

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Inscription</Text>
      </TouchableOpacity>

      <CustomButton text="Se connecter" onPress={ConnectPressed} />
    </View>
  );

};

const styles = StyleSheet.create({
  registering: {
    alignItems: 'center',
    padding: 20,
  },
});

export default Login;
