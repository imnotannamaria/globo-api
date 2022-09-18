import { Heart } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonCointainer } from "./styles";

export function Button() {
  return (
    <ButtonCointainer>
      <TouchableOpacity>
        <Text>Button</Text>
        <Heart color="#AE2983" weight="fill" size={32} />
      </TouchableOpacity>
    </ButtonCointainer>
  )
}