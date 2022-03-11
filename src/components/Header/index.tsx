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
import { handleOnClickSearchButton } from './utils';

export function Header() {
  const [locationInputValue, setLocationInputValue] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const { setLocationInput, forecast, locationResponse, loading, isEmpty } = useGetForecasts();

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
              <LocationText>{`${locationResponse.name}`}</LocationText>
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
      <ResearchContainer>
        <Input
          onChange={handleSetLocation}
        />
        <Button
          name='search'
          onClick={() => handleOnClickSearchButton(setLocationInput, locationInputValue)}
          disabled={loading && !isEmpty}
          loading={loading && !isEmpty}
          data-testid='btn-search'
        />
      </ResearchContainer>
    </Container>
  )
};