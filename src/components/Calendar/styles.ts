import styled from 'styled-components/native';

export const CalendarContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
`

export const CalendarHeader = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const CalendarTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  font-weight: bold;
`