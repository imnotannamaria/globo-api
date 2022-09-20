import { TouchableOpacityProps } from 'react-native';

import { ProgramDTO } from '../../DTOS/ProgramDTO';
import { formatStartAndEndTime } from '../../utils/formatStartAndEndTime';

import { 
  ProgramContainer, 
  ProgramImage, 
  ProgromContent,
  ProgramTitle,
  DateProgramContainer,
  DateProgramText,
} from './styles';

interface ProgramProps extends TouchableOpacityProps{
  data: ProgramDTO;
}

export function Program({ data, ...rest } : ProgramProps) {
  let starTime = data.human_start_time.toString();
  let endTime = data.human_end_time.toString();

  const startFormattedTime = formatStartAndEndTime(starTime);
  const EndFormattedTime = formatStartAndEndTime(endTime);

  return (
    <ProgramContainer {...rest}>
      <ProgramImage
        source={{ uri : data.custom_info.Graficos.ImagemURL ?  data.custom_info.Graficos.ImagemURL : 'https://via.placeholder.com/640x360.png?text=Program+Image'}}
        resizeMode="contain"
      />
      <ProgromContent>
        <ProgramTitle>
          {data.title ? data.title : data.program.name} 
        </ProgramTitle>

        <DateProgramContainer>
          <DateProgramText>
            Inicía as {startFormattedTime}h
          </DateProgramText>
          <DateProgramText>
            Termina das {EndFormattedTime}h
          </DateProgramText>
        </DateProgramContainer>
      </ProgromContent>
    </ProgramContainer>
  )
}
