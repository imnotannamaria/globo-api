import React from 'react';
import { StatusBar } from 'react-native';

import auth from '@react-native-firebase/auth';
import { useNavigation, useRoute } from "@react-navigation/native";

import { SquareButton } from '../../components/SquareButton';
import { ProgramDTO } from '../../DTOS/ProgramDTO';
import { 
  ProgramDetailsContainer, 
  ProgramDetailsHeader, 
  ProgramDetailsTitle,
  ProgramDetailsTitleStrong,
  ProgramDetailsContent,
  ProgramDetailsImage,
  DateProgramContainer,
  DateProgramText,
  ProgramDetailsInfo,
} from './styles';
import { formatStartAndEndTime } from '../../utils/formatStartAndEndTime';

interface ProgramDetailsParams {
  program: ProgramDTO;
}
export function ProgramDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { program } = route.params as ProgramDetailsParams;

  function handleGoBackRedirect() {
    navigation.goBack();
  }
  
  var startFormattedTime = formatStartAndEndTime(program.human_start_time.toString());
  var EndFormattedTime = formatStartAndEndTime(program.human_end_time.toString());

  return (
    <ProgramDetailsContainer>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <ProgramDetailsHeader>
        <SquareButton
          isLogout={false}
          onPress={handleGoBackRedirect}
        />

        <ProgramDetailsTitle>{program.title ? program.title : program.program.name} </ProgramDetailsTitle>
      </ProgramDetailsHeader>  

      <ProgramDetailsContent>
        <ProgramDetailsImage
          source={{ uri : program.custom_info.Graficos.ImagemURL ?  program.custom_info.Graficos.ImagemURL : 'https://via.placeholder.com/640x360.png?text=Program+Image'}}
          resizeMode="cover"
        />

        <DateProgramContainer>
          <DateProgramText>
            Inicía as {startFormattedTime}h
          </DateProgramText>
          <DateProgramText>
            Termina as {EndFormattedTime}h
          </DateProgramText>
        </DateProgramContainer>

        <ProgramDetailsInfo>
          <ProgramDetailsTitleStrong>Descrição</ProgramDetailsTitleStrong> {'\n'}{program.description}
        </ProgramDetailsInfo>
        
        <ProgramDetailsInfo>
          <ProgramDetailsTitleStrong>Spnipse: </ProgramDetailsTitleStrong> {'\n'}{program.custom_info.Resumo.Sinopse}
        </ProgramDetailsInfo>

        <ProgramDetailsInfo>
          <ProgramDetailsTitleStrong>Duração: </ProgramDetailsTitleStrong> {'\n'}{program.duration_in_minutes} minutos
        </ProgramDetailsInfo>
      </ProgramDetailsContent>
    </ProgramDetailsContainer>
  )
}