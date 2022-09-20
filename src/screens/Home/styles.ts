import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
` 

export const HomeHeader = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const HomeTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  font-weight: bold;
`

export const ProgramList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false
})`` as React.ComponentType as new <ProgramDTO>() => FlatList<ProgramDTO>;