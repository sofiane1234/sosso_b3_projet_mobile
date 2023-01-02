import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import { ButtonStyle, TextStyle} from './styledComponents/styledComponents';

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


export default CustomButton;
