import React, { useState } from "react";
import { Alert } from "react-native";

import auth from '@react-native-firebase/auth';

import signInImage from '../../assets/signInImage.png';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { 
  ButtonContainer, 
  ForgotPasswordButton, 
  ForgotPasswordButtonText, 
  ImageContainer, 
  Image,
  SignInContainer, 
  TextHeading 
} from "./styles";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleCreateUserAccount() {
    console.log(email, password)
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
    console.log(email, password)
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => console.log(user))
    .catch(error => {
      console.log(error)
      if(error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        return Alert.alert('Usuário não encontrado! \nE-mail e/ou senha inválida');
      }
    })
  }

  function handleForgotPassword() {
    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert('Enviamos um link no seu email para redefinir sua senha!'))
  }
  
  return (
    <SignInContainer>
      <ImageContainer>
        <Image source={signInImage} />
      </ImageContainer>
      
      <TextHeading>
        Faça seu login ou cadastre-se
      </TextHeading>

      <Input 
        placeholder="E-mail"
        onChangeText={setEmail}
      />
      <Input 
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
      />

      <ButtonContainer>
        <Button 
          title="Entrar"
          onPress={handleSignInWithEmailAndPassword}
        />
        <Button 
          title="Cadastre-se"
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