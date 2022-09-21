import React from 'react';

import { Feather } from '@expo/vector-icons';

import { 
  Calendar as CustomCalendar,
  DateData,
  LocaleConfig
} from 'react-native-calendars';

import { useTheme } from 'styled-components';

import { ptBR } from './localeConfig';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  }
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: (day: DateData) => void;
}

function Calendar({ markedDates, onDayPress } : CalendarProps) {
  const theme = useTheme();

  const date = new Date().toString();

  return (
    <CustomCalendar
      renderArrow={(direction) => 
        <Feather 
          size={24} 
          color={theme.colors.darkMain} 
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
      />}

      headerStyle={{
        backgroundColor: theme.colors.darkMain,
        borderBottomWidth: 0.5,
      }}

      style={{
        height: 100,
      }}

      theme={{
        textDayHeaderFontSize: 10,
        textMonthFontSize: 15,
        monthTextColor: theme.colors.darkMain,
        arrowStyle: {
          marginHorizontal: -15
        },
        todayTextColor: theme.colors.darkMain,
      }}

      firstDay={1}
    
      minDate={date}

      markingType="dot"
      markedDates={markedDates}
      onDayPress={onDayPress}
    /> 
  )
}

export {
  Calendar,
  MarkedDateProps,
}