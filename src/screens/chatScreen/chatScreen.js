import React from "react";
import { View, useState } from "react-native";
import CustomInupt from "../../components/customInput";

const ChatScrean = () => {
    const [chatBar, setChatBar] = useState('');

    return (
        <View>
            <CustomInupt 
                placeholder="Entrez votre message" 
                value={chatBar} 
                setValue={setChatBar} 
            />
        </View>
    );
};

export default ChatScrean;
