import { WiCelsius } from 'react-icons/wi';

import {
  Container,
  Content,
  Description,
  Temperature,
  TemperatureWrapper
} from "./styles";
import { WiDayCloudyHigh } from 'react-icons/wi';
import { ForecastSideInfo } from '../ForecastSideInfo';

export function ForecastCard() {
  return (
    <Container>
      <ForecastSideInfo />
      <Content>
        <WiDayCloudyHigh size={96} />
        <Description>partly cloudy</Description>
        <TemperatureWrapper>
          <Temperature>45</Temperature>
          <WiCelsius size={80} style={{ position: 'absolute', left: 56, top: 4 }} />
        </TemperatureWrapper>
      </Content>
    </Container>
  );
};