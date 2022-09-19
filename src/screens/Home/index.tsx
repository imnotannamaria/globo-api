import React from "react";
import { StatusBar, View, Text } from "react-native";

export function Home() {
  return (
    <View>
      <StatusBar translucent backgroundColor='transparent'/>
      <Text>Home</Text>
    </View>
  );
}