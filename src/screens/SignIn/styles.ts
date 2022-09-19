import styled from "styled-components/native";

export const SignInContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.View`
  width: 270px;
  height: 270px;
`;

export const Image = styled.Image`
  width: 270px;
  height: 270px;
  border-radius: 5px;
`;

export const TextHeading = styled.Text`
  font-size: 23px;
  color: #9080ED;
  font-weight: bold;
  font-family: "RobotoSlab-Medium";
  margin: 64px 0 50px;
`;

export const ButtonContainer = styled.View`
  margin-top: 40px;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordButtonText = styled.Text`
  color: #737078;
  font-size: 16px;
`;