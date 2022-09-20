import styled from 'styled-components/native';

export const ButtonCointainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.main};
  padding: 15px 20px;
  min-width: 120px;
  border-radius: 5px;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.darkMain};
  font-size: 16px;
  font-weight: bold;
`