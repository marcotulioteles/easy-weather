import Image from 'next/image';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import {
  Container,
  AppTitle,
  LogoContainer,
  DateContainer,
  DateText,
  ResearchContainer,
  LogoAndDate,
  Location,
  LocationText
} from './styles';

import { Input } from '../Input';
import { Button } from '../Button';
import { ChangeEvent, useEffect, useState } from 'react';
import { useGetForecasts } from '../../hooks/forecasts';

export function Header() {
  const [locationInputValue, setLocationInputValue] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const { setLocation, forecast, locationResponse } = useGetForecasts();

  const handleSetLocation = (event: ChangeEvent<HTMLInputElement>) => {
    setLocationInputValue(event.target.value);
  }

  useEffect(() => {
    const date = Date.now();
    const dateFormatted = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short'
    }).format(date);

    setCurrentDate(dateFormatted);
  }, [forecast])

  return (
    <Container>
      <LogoAndDate>
        <LogoContainer>
          <Image
            src={'/images/easy-weather-logo.svg'}
            width={80}
            height={80}
            alt='EasyWeatherLogo'
          />
          <AppTitle><strong>Easy</strong>Weather</AppTitle>
        </LogoContainer>
        <DateContainer>
          <FiCalendar
            color={theme.COLORS.BOX_BORDER}
            size={28}
          />
          <DateText>{currentDate}</DateText>
        </DateContainer>
      </LogoAndDate>
      <Location>
        {forecast?.city &&
          <>
            <FiMapPin size={36} color={theme.COLORS.BOX_BORDER} />
            <LocationText>{`${locationResponse.name}, ${locationResponse.country}`}</LocationText>
          </>
        }
      </Location>
      <ResearchContainer>
        <Input
          onChange={handleSetLocation}
        />
        <Button
          name='search'
          onClick={() => setLocation(locationInputValue)}
        />
      </ResearchContainer>
    </Container>
  )
};