import React, { useEffect, useState } from 'react';

import auth from '@react-native-firebase/auth';

import { SignIn } from '../screens/SignIn';
import { StackRoutes } from './stack.routes';
import { NavigationContainer } from '@react-navigation/native';

interface User {
  uid: string;
}

export function Routes() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userInfo => {
      setUser(userInfo)
    })

    return subscriber;
  }, [])
  
  return (
    <NavigationContainer>
      { user ? <StackRoutes /> : <SignIn/> }
    </NavigationContainer>
  )
}