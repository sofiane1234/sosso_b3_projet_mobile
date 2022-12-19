import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Practice = ({navigation}) => {
    const navigate = useNavigation()
    return (
        <View>
            <Text> Sosso Test </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>TO Login</Text>
            </TouchableOpacity>
        </View> 
    )
};

export default Practice;