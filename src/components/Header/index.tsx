import Image from 'next/image';
import { FiCalendar } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import {
  Container,
  AppTitle,
  LogoContainer,
  DateContainer,
  DateText,
  ResearchContainer,
  LogoAndDate
} from './styles';

import { Input } from '../Input';
import { Button } from '../Button';

export function Header() {
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
            color={theme.COLORS.PLACEHOLDER_TEXT}
            size={18}
          />
          <DateText>20 February 2022</DateText>
        </DateContainer>
      </LogoAndDate>
      <ResearchContainer>
        <Input />
        <Button />
      </ResearchContainer>
    </Container>
  )
};