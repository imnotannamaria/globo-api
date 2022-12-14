import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import auth from '@react-native-firebase/auth';

import signInImage from '../../assets/signInImage.png';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { 
  ButtonContainer, 
  ForgotPasswordButton, 
  ForgotPasswordButtonText, 
  ImageContainer, 
  Image,
  SignInContainer, 
  TextHeading 
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleCreateUserAccount() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert('Usuário criado com sucesso!'))
      .catch(error => {
        if(error.code === 'auth/email-already-in-use') {
          return Alert.alert('E-mail já cadastrado!');
        }

        if(error.code === 'auth/invalid-email') {
          return Alert.alert('E-mail inválido!');
        }

        if(error.code === 'auth/weak-password') {
          return Alert.alert('Senha inválida! \na senha deve ter no mínimo 6 digitos');
        }
      })
  }

  function handleSignInWithEmailAndPassword() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then()
      .catch(error => {
        console.log(error)
        if(error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          return Alert.alert('Usuário não encontrado! \nE-mail e/ou senha inválida');
        }
      })
  }

  function handleForgotPassword() {
    if(!email) {
      return Alert.alert('Preencha o campo de email para redefinir sua senha!');
    }
    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert('Enviamos um link no seu email para redefinir sua senha!'))
    .catch(error => {
      return Alert.alert('Não foi possível redefinir sua senha! \nTente novamente mais tarde!');
    })
  }
  
  return (
    <SignInContainer>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <ImageContainer>
        <Image source={signInImage} />
      </ImageContainer>
      
      <TextHeading>
        Faça seu login ou cadastre-se
      </TextHeading>

      <Input 
        placeholder='E-mail'
        onChangeText={setEmail}
      />
      <Input 
        placeholder='Senha'
        secureTextEntry
        onChangeText={setPassword}
      />

      <ButtonContainer>
        <Button 
          title='Entrar'
          onPress={handleSignInWithEmailAndPassword}
        />

        <Button 
          title='Cadastrar-se'
          onPress={handleCreateUserAccount}
        />
      </ButtonContainer>

      <ForgotPasswordButton onPress={handleForgotPassword}>
        <ForgotPasswordButtonText>
          Esqueci minha senha
        </ForgotPasswordButtonText>
      </ForgotPasswordButton>
    </SignInContainer>
  )
}