import styled from "styled-components/native"

export const ProgramDetailsContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
` 

export const ProgramDetailsHeader = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ProgramDetailsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-size: 20px;
  font-weight: bold;
`
export const ProgramDetailsTitleStrong = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.main};
`

export const ProgramDetailsContent = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 10,
  },
  showsVerticalScrollIndicator: false
})` 
`

export const ProgramDetailsImage = styled.Image`
  width: 100%;
  height: 250px;
`

export const DateProgramContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;

`

export const DateProgramText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  font-weight: bold;
`

export const ProgramDetailsInfo = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin-top: 20px;
  padding: 10px;
  text-align: justify;
`