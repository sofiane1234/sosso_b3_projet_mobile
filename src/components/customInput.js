import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const CustomInupt = ({value, setValue, placeholder, secureTextEntry, autoCorrect, keyboardType}) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
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

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'lightgrey',
    width: '100%',
    paddingHorizontal: 15,
    marginVertical: 10,
    borderColor: '#e8e8',
    borderWidth: 1,
    borderRadius: 10,
  },

  input: {
    marginVertical : 10
  },
});

export default CustomInupt;
