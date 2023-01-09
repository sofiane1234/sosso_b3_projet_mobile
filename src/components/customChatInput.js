import React from 'react';
import {TextInput, View} from 'react-native';
import styled from 'styled-components';

const CustomChatInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  autoCorrect
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
    </View>
  );
};
const ChatView = styled.View`

`;

const ChatInuptStyle = styled.View`
  height: 30%;
  width: 90%;
  background-color: lightgray;
  top: 195%;
  bottom: 0%;
  border-radius: 5px;
  margin-left: 5px;
  padding-left: 30px;
  padding-right: 30px;
`;
export default CustomChatInput;
