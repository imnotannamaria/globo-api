import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonCointainer, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonCointainer {...rest}>
      <ButtonText>
        { title }
      </ButtonText>
    </ButtonCointainer>
  )
}