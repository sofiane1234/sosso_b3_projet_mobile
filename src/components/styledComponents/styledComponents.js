import styled from 'styled-components';
import ChatList from '../chatComponents';

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
  background-color: ${(props) => props.bg};
  width: 90%;
  padding: 15px;
  margin-left: 15px;
  margin-top: 30px;
  align-items: center;
  border-radius: 30px;
  background-color: ${(props) => props.bg};
`;

const FlatListStyle = styled.View`
  background-color: lime;
  padding: 15px;
  border-radius: 5px;
  width: 80%;
  margin-left: 40px;
  align-items: center;
  margin-top: 40px;
`;

const ChatListStyle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: whitesmoke;
`;

export {RegisterStyle, ButtonStyle, TextStyle, FlatListStyle, ChatListStyle};
