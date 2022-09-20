import { NavigationContainer } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import React, { useEffect, useState } from 'react';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

interface User {
  uid: string;
}

export function Routes() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userInfo => {
      console.log(userInfo)
      setUser(userInfo)
    })

    return subscriber;
  }, [])
  
  return (
    <NavigationContainer>
      { user ? <Home /> : <SignIn/> }
    </NavigationContainer>
  )
}