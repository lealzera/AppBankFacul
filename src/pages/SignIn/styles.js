import styled from "styled-components";

export const Background = styled.View`
    flex: 1;
    background-color: #23083d;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-bottom: 25px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    width: 60%;
    font-size: 20px;
    padding: 10px;
    border-radius: 7px;
    color: #121212;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 60%;
    height: 50px;
    border-radius: 7px;
    background-color: #007786;
    margin-top: 12px;
    align-items: center;
    justify-content: center;
`;
export const SubmitText = styled.Text`
    font-size: 22px;
    color: #fff;
`;
export const Link = styled.TouchableOpacity`
    margin-top: 15px;
    margin-bottom: 10px;
`;
export const LinkText = styled.Text`
    color: #d9d9fc;
`;

SubmitButton, 
  SubmitText, 
  Link, 
  LinkText