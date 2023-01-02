import React from 'react';
import {TextInput, View} from 'react-native';
import styled from 'styled-components';
import {RegisterStyle} from './styledComponents/styledComponents';

const CustomInupt = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  autoCorrect,
  keyboardType,
}) => {
  return (
    <View>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          keyboardType={keyboardType}
        />
    </View>
  );
};

export default CustomInupt;
