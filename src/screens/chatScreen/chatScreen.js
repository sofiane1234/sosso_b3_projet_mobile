import React from "react";
import { useEffect } from "react";
import { View, useState, Text, ScrollView, TextInput } from "react-native";
import CustomInupt from "../../components/customInput";
import {firebase} from "../../firebase";

const ChatScrean = () => {

    return (
        <View>
            <Text> Liste des utilisateurs  {firebase.auth().currentUser.email}</Text>
        </View>
    );
};

export default ChatScrean;
