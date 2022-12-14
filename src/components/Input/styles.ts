import styled from 'styled-components/native';

export const TextInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.text};
  max-height: 60px;
  height: 60px;
  width: 80%;
  border-radius: 5px;
  padding-left: 12px;
  margin-bottom: 12px;
`;
