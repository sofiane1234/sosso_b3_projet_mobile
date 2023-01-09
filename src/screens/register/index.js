import {View} from 'react-native';
import {React, useState} from 'react';
import CustomInupt from '../../components/customInput';
import CustomButton from '../../components/customButton';
import {firebase} from '../../firebase';
import {useNavigation} from '@react-navigation/native';
import {RegisterStyle} from '../../components/styledComponents/styledComponents';
import database from '@react-native-firebase/database';
import styled from 'styled-components';
import {uuidv4} from '@firebase/util';

const Register = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const RegisterPressed = async (email, password) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        console
          .log('Inscription de : ', user.email)
          .catch(err => {
            alert(err.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection('users')
              .doc(firebase.auth().currentUser.uid)
              .set({
                email,
                password,
              });
          })
          .catch(err => {
            alert(err.message);
          });
      });
  };

  return (
    <View>
      <RegisterStyle bg_color="cyan">
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

        <CustomButton
          text="S'inscrire"
          onPress={() => RegisterPressed(email, password)}
        />
        <CustomButton
          text="Aller vers Connexion"
          onPress={() => navigation.navigate('Login')}
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
  place-items: center;
`;

const InputStyleText = styled.Text`
  margin-left: 5px;
`;

export default Register;
