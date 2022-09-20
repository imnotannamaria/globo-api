import { TouchableOpacityProps } from 'react-native';

import { ProgramDTO } from '../../DTOS/ProgramDTO';

import { 
  ProgramContainer, 
  ProgramTitle 
} from './styles';

interface ProgramProps extends TouchableOpacityProps{
  data: ProgramDTO;
}

export function Program({ data, ...rest } : ProgramProps) {
  return (
      //Nome
      //Data de inicio
      //data de termino
      //duração
      //imagem
    <ProgramContainer {...rest}>
      <ProgramTitle>
        {data.title ? data.title : data.program.name} 
      </ProgramTitle>
    </ProgramContainer>
  )
}