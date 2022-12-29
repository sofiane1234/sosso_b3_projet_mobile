import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const CustomButton = ({onPress, text}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <ButtonStyle>
          <Text> {text} </Text>
        </ButtonStyle>
      </TouchableOpacity>
    </View>
  );
};

// styled components

const ButtonStyle = styled.View`
  background-color: lime;
  width: 90%;
  padding: 15px;
  margin-left: 15px;
  margin-top: 35px;
  align-items: center;
  border-radius: 30px;
`;

export default CustomButton;
