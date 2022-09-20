import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import auth from '@react-native-firebase/auth';
import uuid from 'react-native-uuid';
import axios from 'axios';

import { 
  HomeContainer, 
  HomeTitle, 
  HomeHeader, 
  ProgramList 
} from './styles';

import { Program } from '../../components/Program';
import { LogoutButton } from '../../components/LogoutButton';
import { Load } from '../../components/Load';
import { ProgramDTO } from '../../DTOS/ProgramDTO';



export function Home() {
  const [program, setProgram] = useState<ProgramDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const api = axios.create({
    baseURL: 'https://epg-api.video.globo.com/programmes/1337',
  });

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const response = await api.get('', { params: { date: '2022-09-20' } });
        setProgram(response.data.programme.entries);
      } catch (error) {
        console.log(error);
        Alert.alert('Não foi possível carregar os programas');	
      }finally{
        setLoading(false);
      }
    }

    fetchPrograms();
  }, [])

  function handleLogout() {
    auth().signOut();
  }

  return (
    <HomeContainer>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <HomeHeader>
        <HomeTitle>Home</HomeTitle>
        <LogoutButton
          onPress={handleLogout}
        />
      </HomeHeader>

      {loading ? <Load/> :
        <ProgramList 
          data={program}
          keyExtractor={() => uuid.v4().toString()}
          renderItem={({ item }) => (
            <Program data={item}/>
          )}
        />
      }
      
    </HomeContainer>
  );
}