import {useNavigation} from '@react-navigation/native';
import {Header} from '@react-navigation/stack';
import React from 'react';
import {useEffect} from 'react';
import {
  View,
  useState,
  Text,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import ChatList from '../../components/chatComponents';
import CustomButton from '../../components/customButton';
import CustomInupt from '../../components/customInput';
import {ButtonStyle, FlatListStyle} from '../../components/styledComponents/styledComponents';
import {firebase} from '../../firebase';
import ChatScrean from '../chatscreen';

const Home = () => {
  const navigation = useNavigation();

  const LogoutPressed = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <View>
      <CustomButton text="Se deconnecter" onPress={LogoutPressed} />
      <ScrollView>
          <ChatList onPress={() => navigation.navigate('Chat')}/>
      </ScrollView>
    </View>
  );
};

export default Home;
