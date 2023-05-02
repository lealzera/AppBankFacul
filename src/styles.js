import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: #121212;
`;

export const Title = styled.Text`
color: ${props => props.cor};
font-size: 40px;
`;

export const Nome = styled.Text`
color: #fff;
font-size: 20px;
`;

export const Botao = styled.TouchableOpacity`
background-color: #ddd;
padding: 10px;
margin-top: 30px;
border-radius: 8px;
width: 20%;
justify-content: center;
align-items: center;
`;

export const  BotaoTexto = styled.Text`
color: #000;
font-size: 15px
`;