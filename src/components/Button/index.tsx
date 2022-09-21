import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonCointainer, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <ButtonCointainer onPress={onPress}>
      <ButtonText>
        { title }
      </ButtonText>
    </ButtonCointainer>
  )
}