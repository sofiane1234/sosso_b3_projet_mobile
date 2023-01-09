import React from 'react';

import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import {
  ChatListStyle,
  FlatListStyle,
} from './styledComponents/styledComponents';

const ChatList = ({onPress}) => {
  const chatData = [
    {id: 1, text: 'Chat 1'},
    {id: 2, text: 'Chat 2'},
    {id: 3, text: 'Chat 3'},
    {id: 4, text: 'Chat 4'},
    {id: 5, text: 'Chat 5'},
    {id: 6, text: 'Chat 6'},
    {id: 7, text: 'Chat 7'},
    {id: 8, text: 'Chat 8'},
    {id: 9, text: 'Chat 9'},
    {id: 10, text: 'Chat 10'},
    {id: 11, text: 'Chat 11'},
    {id: 13, text: 'Chat 13'},
    {id: 14, text: 'Chat 14'},
    {id: 15, text: 'Chat 15'},
    {id: 16, text: 'Chat 16'},
  ];

  return (
    <View>
      <ScrollView>
        <FlatList
          data={chatData}
          renderItem={({item}) => (
            <TouchableOpacity onPress={onPress}>
              <FlatListStyle>
                <ChatListStyle>
                  <Text>{item.text}</Text>
                </ChatListStyle>
              </FlatListStyle>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default ChatList;
