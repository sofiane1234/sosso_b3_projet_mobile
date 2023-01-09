import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import CustomInupt from '../../components/customInput';
import CustomButton from '../../components/customButton';
import {firebase} from '../../firebase';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {
  ButtonStyle,
  RegisterStyle,
} from '../../components/styledComponents/styledComponents';

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
      <RegisterStyle bg_color="lime">
        <InputStyle>
          <InputStyleText>
            <CustomInupt
              placeholder="Adresse email"
              value={email}
              setValue={setEmail}
              autoCorrect={false}
            />
          </InputStyleText>
        </InputStyle>
        <InputStyle>
          <InputStyleText>
            <CustomInupt
              placeholder="Mot de passe"
              value={password}
              setValue={setPassword}
              autoCorrect={false}
              secureTextEntry
            />
          </InputStyleText>
        </InputStyle>
        <CustomButton text="Se connecter" onPress={ConnectPressed} />

        <CustomButton
          text="Aller vers Inscription"
          onPress={() => navigation.navigate('Register')}
        />
      </RegisterStyle>
    </View>
  );
};

const InputStyle = styled.View`
  background-color: lightgrey;
  width: 90%;
  margin-left: 20px;
  margin-top: 25px;
  margin-bottom: 2px;
  place-items: center;
  text-transform: lowercase;
`;

const InputStyleText = styled.Text`
  margin-left: 5px;
`;

export default Login;
