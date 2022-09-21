import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import auth from '@react-native-firebase/auth';
import uuid from 'react-native-uuid';
import axios from 'axios';

import { 
  HomeContainer, 
  HomeTitle, 
  HomeHeader, 
  ProgramList,
  HomeFooter
} from './styles';

import { Program } from '../../components/Program';
import { SquareButton } from '../../components/SquareButton';
import { Load } from '../../components/Load';
import { ProgramDTO } from '../../DTOS/ProgramDTO';
import { useNavigation, CommonActions, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import { Calendar, DateData } from 'react-native-calendars';
import { useTheme } from 'styled-components/native';


export function Home() {
  const theme = useTheme();

  const navigation = useNavigation();

  const [program, setProgram] = useState<ProgramDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [calendarDate, setCalendarDate] = useState('');

  var TodayDate = format(new Date(), 'yyyy-MM-dd')

  const SelectedDate = calendarDate ? calendarDate : TodayDate;

  const SelectedFormatedDate = format(new Date(SelectedDate), 'dd/MM/yyyy');

  const api = axios.create({
    baseURL: 'https://epg-api.video.globo.com/programmes/1337',
  });

  useEffect(() => {
    async function fetchPrograms() {
      //2022-09-20
      try {
        const response = await api.get('', { params: { date: SelectedDate } });
        setProgram(response.data.programme.entries);
      } catch (error) {
        console.log(error);
        Alert.alert('Não há programação disponível para essa data');	
      }finally{
        setLoading(false);
      }
    }

    fetchPrograms();
  }, [SelectedDate])

  function handleLogout() {
    auth().signOut();
  }

  function handleProgramDetailsRedirect(program: ProgramDTO) {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'ProgramDetails', 
        params: {
          program
        }
      })
    )
  }

  return (
    <HomeContainer>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <HomeHeader>
        <HomeTitle>Programação dia {SelectedFormatedDate}</HomeTitle>
        <SquareButton
          onPress={handleLogout}
        />
      </HomeHeader>

      {loading ? <Load/> :
        <ProgramList 
          data={program}
          keyExtractor={() => uuid.v4().toString()}
          renderItem={({ item }) => (
            <Program data={item} onPress={() => handleProgramDetailsRedirect(item)}/>
          )}
        />
      }

      <HomeFooter>
        <Calendar
          markedDates={{
            [SelectedDate]: {
              selected: true,
              selectedColor: theme.colors.main
            }
          }}
          onDayPress={(day) => {
            setCalendarDate(day.dateString)
          }}
        />
      </HomeFooter>
    </HomeContainer>
  );
}