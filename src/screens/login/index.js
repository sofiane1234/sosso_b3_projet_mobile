import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import CustomInupt from '../../components/customInput';
import CustomButton from '../../components/customButton';
import {firebase} from '../../firebase';
import styled from 'styled-components';
import {ThemeProvider, useNavigation} from '@react-navigation/native';
import {RegisterStyle} from '../../components/styledExample/styledExample';
import theme from '../../config/theme';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');
      }
    });
    return unsubscribe;
  }, []);

  const ConnectPressed = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        navigation.navigate('Home');
        console.log('connexion en tant que : ', user.email);
      })
      .catch(err => alert(err.message));
  };

  return (
    <View>
      <RegisterStyle>
        <InputStyle>
          <CustomInupt
            placeholder="Adresse email"
            value={email}
            setValue={setEmail}
            autoCorrect={false}
          />
        </InputStyle>
        <InputStyle>
          <CustomInupt
            placeholder="Mot de passe"
            value={password}
            setValue={setPassword}
            autoCorrect={false}
            secureTextEntry
          />
        </InputStyle>
        <ThemeProvider theme={theme}>
          <CustomButton text="Se connecter" onPress={ConnectPressed} />
          <CustomButton
            text="Aller vers Inscription"
            onPress={() => navigation.navigate('Register')}
          />
        </ThemeProvider>
      </RegisterStyle>
    </View>
  );
};

const InputStyle = styled.View`
  background-color: lightgrey;
  width: 90%;
  margin-left: 20px;
  margin-top: 25px;
  place-items: center;
`;

export default Login;
