import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useTheme } from 'styled-components';

import { LoadContainer } from './styles';

export function Load() {
  const theme = useTheme()
  return (
    <LoadContainer>
      <ActivityIndicator
        size='large'
        color={theme.colors.main}
      />
    </LoadContainer>
  )
}