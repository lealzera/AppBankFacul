import React, { useContext } from 'react';
import { Platform } from 'react-native';

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText
} from '../SignIn/styles'

import { AuthContext } from '../../contexts/auth'


export default function SignUp(){
  const { user }  = useContext(AuthContext);
  
  function handleSignUp(){
    alert(user.nome);
  }
  
  return(
    <Background style={{backgroundColor: '#d2d2d2'}}>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''} 
      enabled
      >
        <AreaInput>          
          <Input
            placeholder="Nome e Sobrenome"
          />
        </AreaInput>
        <AreaInput>          
          <Input
            placeholder="Seu email"
            keyboardType="email-address"
          />
        </AreaInput>
        <AreaInput>          
          <Input
            placeholder="Sua senha"
          />
        </AreaInput>
        <SubmitButton activeOpacity={0.7} onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

      </Container>
    </Background>
  )
}