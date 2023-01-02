import styled from 'styled-components';

const RegisterStyle = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.bg_color};
`;

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

export {RegisterStyle, ButtonStyle, TextStyle};
