import { TouchableOpacityProps } from 'react-native';

import { LogoutButtonContainer } from './styles'

import { FontAwesome5 } from '@expo/vector-icons';

import { useTheme } from 'styled-components';


export function LogoutButton({ onPress } : TouchableOpacityProps) {
  const theme = useTheme();
  
  return (
    <LogoutButtonContainer onPress={onPress}>
      <FontAwesome5 
          name='sign-out-alt' 
          size={24} 
          color={theme.colors.text}
        />
    </LogoutButtonContainer>
  )
}