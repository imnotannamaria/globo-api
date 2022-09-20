import React from 'react';
import { StatusBar } from 'react-native';
import { HomeContainer, HomeTitle } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <HomeTitle>OXI</HomeTitle>
    </HomeContainer>
  );
}