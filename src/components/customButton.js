import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const CustomButton = ({onPress, text}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <ButtonStyle bg='blue'>
          <TextStyle>
            <Text>{text}</Text>
          </TextStyle>
        </ButtonStyle>
      </TouchableOpacity>
    </View>
  );
};

// styled components
const TextStyle = styled.Text`
  color: whitesmoke;
  font-size: 16px;
  font-weight: bold;
`;

const ButtonStyle = styled.View`
  background-color: blue;
  color: yellowgreen;
  width: 90%;
  padding: 15px;
  margin-left: 15px;
  margin-top: 30px;
  align-items: center;
  border-radius: 30px;
  background-color: ${(props) => props.bg};
`;

export default CustomButton;
