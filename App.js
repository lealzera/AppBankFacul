import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Botao, BotaoTexto, Container, Title, Nome } from './src/styles';

export default function App() {
  return (
    <Container>
      <Title cor="#ff0000">Ethan Leal</Title>
      <Nome>Hello, World!</Nome>
      <Botao onPress={() => alert('Botão funcionando!')} >
        <BotaoTexto>Entrar</BotaoTexto>
      </Botao>
      <StatusBar style='auto'/>
    </Container>
  );
}
