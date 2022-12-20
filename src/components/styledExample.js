import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const StyledExample = () => {
    return (
        <View>
            <Square />
        </View>
    );
}
const Square = styled.View`
    width: 100%;
    height: 70%;
    background-color: cyan;
`;
export default StyledExample;