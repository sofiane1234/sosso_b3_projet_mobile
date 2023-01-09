import React, {useState, useLayoutEffect, useCallback} from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import CustomChatInput from '../../components/customChatInput';

const ChatScrean = () => {
  const [messges, setMessages] = useState([]);

  const messageData = [
    {id: 1, user_id: 1, text: 'Salut'},
    {id: 2, user_id: 2, text: 'Salut !'},
    {id: 3, user_id: 1, text: 'Ca va ?'},
    {id: 4, user_id: 2, text: 'Oui'},
    {id: 5, user_id: 2, text: 'et toi ?'},
    {id: 6, user_id: 1, text: 'Ca va, ça va'},
    {id: 7, user_id: 1, text: 'Presentation'},
    {id: 8, user_id: 2, text: 'Dequoi ?'},
    {id: 9, user_id: 1, text: 'Rien'},
    {id: 10, user_id: 2, text: 'Ah ok'},
    {id: 11, user_id: 1, text: 'Frittes'},
    {id: 13, user_id: 2, text: 'Pizza'},
    {id: 14, user_id: 1, text: 'Test'},
    {id: 15, user_id: 2, text: 'Non'},
    {id: 16, user_id: 1, text: 'Si'},
  ];

  return (
    <View>
      <ScrollView>
        <FlatList
          data={messageData}
          renderItem={({item}) => 
          <Text>{item.text}</Text>}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <CustomChatInput />
    </View>
   
           

  
  );
};

export default ChatScrean;
