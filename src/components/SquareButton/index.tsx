import { TouchableOpacityProps } from 'react-native';

import { LogoutButtonContainer } from './styles'

import { FontAwesome5 } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

interface SquareButtonProps extends TouchableOpacityProps {
  isLogout?: boolean;
  onPress: () => void;
}

export function SquareButton({ onPress, isLogout = true } : SquareButtonProps) {
  const theme = useTheme();
  
  return (
    <LogoutButtonContainer onPress={onPress}>
      {isLogout ? (
        <FontAwesome5 
          name='sign-out-alt' 
          size={25} 
          color={theme.colors.danger} 
        />
      ) : (
        <FontAwesome5 
          name='arrow-left' 
          size={20} 
          color={theme.colors.text} 
        />
      )}
    </LogoutButtonContainer>
  )
}