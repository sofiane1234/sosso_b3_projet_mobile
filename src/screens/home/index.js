import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { View, useState, Text, ScrollView, TextInput } from "react-native";
import CustomButton from "../../components/customButton";
import CustomInupt from "../../components/customInput";
import {firebase} from "../../firebase";

const Home = () => {
    const navigation = useNavigation();

    const LogoutPressed = () => {
        firebase.auth()
            .signOut()
            .then(() => {
                navigation.navigate('Login')
            })
            .catch(err => {alert(err.message)})
    }
    return (
        <View>
            <Text> Liste des utilisateurs  {firebase.auth().currentUser.email}</Text>
            <CustomButton 
                text="Se deconnecter"
                onPress={LogoutPressed}
            />
        </View>
    );
};

export default Home;
