import styled from "styled-components/native"

export const ProgramContainer = styled.TouchableOpacity`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 8px;
`

export const ProgramImage = styled.Image`
  width: 100%;
  height: 194px;
`

export const ProgromContent = styled.View`
  margin-top: -0.6px;
  padding: 10px;
`

export const ProgramTitle = styled.Text`
  color: ${({ theme }) => theme.colors.darkMain};
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`

export const ProgramNowTitle = styled.Text`
  color: ${({ theme }) => theme.colors.darkMain};
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
`

export const DateProgramContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`

export const DateProgramText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  font-weight: bold;
`