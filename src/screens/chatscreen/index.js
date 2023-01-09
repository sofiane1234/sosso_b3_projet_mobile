import React, {useState, useLayoutEffect, useCallback} from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import CustomChatInput from '../../components/customChatInput';
import {ChatView} from '../../components/customChatInput';

const ChatScrean = () => {
  const [messges, setMessages] = useState([]);

  const messageData = [
    {id: 1, user_id: 1, text: 'Salut', nickname: 'Sosso'},
    {id: 2, user_id: 2, text: 'Salut !', nickname: 'Test'},
    {id: 3, user_id: 1, text: 'Ca va ?', nickname: 'Sosso'},
    {id: 4, user_id: 2, text: 'Oui', nickname: 'Test'},
    {id: 5, user_id: 2, text: 'et toi ?', nickname: 'Test'},
    {id: 6, user_id: 1, text: 'Ca va, ça va', nickname: 'Sosso'},
    {id: 7, user_id: 1, text: 'Presentation', nickname: 'Sosso'},
    {id: 8, user_id: 2, text: 'Dequoi ?', nickname: 'Test'},
    {id: 9, user_id: 1, text: 'Rien', nickname: 'Sosso'},
    {id: 10, user_id: 2, text: 'Ah ok', nickname: 'Test'},
    {id: 11, user_id: 1, text: 'Frittes', nickname: 'Sosso'},
    {id: 13, user_id: 2, text: 'Pizza', nickname: 'Test'},
    {id: 14, user_id: 1, text: 'Test', nickname: 'Sosso'},
    {id: 15, user_id: 2, text: 'Non', nickname: 'Test'},
    {id: 16, user_id: 1, text: 'Si', nickname: 'Sosso'},
  ];

  return (
    <View>
      <ScrollView>
        <ChatView pos = "20">
          <FlatList
            data={messageData}
            renderItem={({item}) => (
              <Text>
                {item.nickname} : {item.text}
              </Text>
            )}
            keyExtractor={item => item.id}
          />
        </ChatView>
      </ScrollView>
      <CustomChatInput />
    </View>
  );
};

export default ChatScrean;
