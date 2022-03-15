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
  LocationText,
  AppTitleFirstName,
  AppTitleLastName,
  LocationTextContainer
} from './styles';

import { Input } from '../Input';
import { Button } from '../Button';
import { ChangeEvent, useEffect, useState } from 'react';
import { useGetForecasts } from '../../hooks/forecasts';

export function Header() {
  const [locationInputValue, setLocationInputValue] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const { setLocationInput, forecast, locationResponse, loading, isEmpty } = useGetForecasts();

  useEffect(() => {
    const date = Date.now();
    const dateFormatted = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short'
    }).format(date);

    setCurrentDate(dateFormatted);
  }, [forecast])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocationInput(locationInputValue)
  }

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
          <AppTitle>
            <AppTitleFirstName>Easy</AppTitleFirstName>
            <AppTitleLastName>Weather</AppTitleLastName>
          </AppTitle>
        </LogoContainer>
        <DateContainer>
          <FiCalendar
            color={theme.COLORS.BLUE_APP}
            size={28}
          />
          <DateText>{currentDate}</DateText>
        </DateContainer>
      </LogoAndDate>
      <Location>
        {forecast?.current?.temp && !loading &&
          <>
            <FiMapPin size={36} color={theme.COLORS.BLUE_APP} />
            <LocationTextContainer>
              <LocationText data-testid='location-name'>{`${locationResponse.name}`}</LocationText>
              <Image
                src={`https://flagcdn.com/w40/${locationResponse.country.toLowerCase()}.png`}
                width={40}
                height={40}
                objectFit='scale-down'
                alt={locationResponse.country}
              />
            </LocationTextContainer>
          </>
        }
      </Location>
      <ResearchContainer onSubmit={handleSubmit}>
        <Input
          value={locationInputValue}
          onChange={event => setLocationInputValue(event.target.value)}
        />
        <Button
          name='search'
          type='submit'
          disabled={loading && !isEmpty}
          loading={loading && !isEmpty}
        />
      </ResearchContainer>
    </Container>
  )
};