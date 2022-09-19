import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonCointainer, ButtonText } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonCointainer {...rest}>
      <ButtonText>
        { title }
      </ButtonText>
    </ButtonCointainer>
  )
}