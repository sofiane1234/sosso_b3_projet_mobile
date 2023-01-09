import React from 'react';
import {TextInput, View, Text, Touchable, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const CustomChatInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  autoCorrect,
}) => {
  return (
    <View>
      <ChatInuptStyle>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
        />
      </ChatInuptStyle>
      <TouchableOpacity>
          <SendButton>
            <Text>Envoyer</Text>
          </SendButton>
        </TouchableOpacity>
    </View>
  );
};

export const ChatView = styled.View`
  margin-left: ${props => props.pos};
  padding-top: 10px;
  background-color: cyan;
  color: white;
`;

const SendButton = styled.View`
  height: 10%;
  width: 15%;
  background-color: lime;
  top: 80%;
  bottom: 0%;
  border-radius: 30px;
  right: 0%;
  left: 83%;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const ChatInuptStyle = styled.View`
  height: 30%;
  width: 80%;
  background-color: lightgray;
  top: 50%;
  bottom: 0%;
  border-radius: 5px;
  margin-left: 5px;
  padding-left: 30px;
  padding-right: 30px;
`;

export default CustomChatInput;
