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
import { useGetForecasts } from '../../hooks/forecasts';
import { convertKelvinToCelsius } from '../../utils';

export function ForecastCard() {
  const { forecast } = useGetForecasts();

  return (
    <Container>
      <ForecastSideInfo />
      <Content>
        <WiDayCloudyHigh size={96} />
        <Description>{forecast.weather.description}</Description>
        <TemperatureWrapper>
          <Temperature>{convertKelvinToCelsius(forecast.main.temp)}</Temperature>
          <WiCelsius size={80} style={{ position: 'absolute', left: 56, top: 4 }} />
        </TemperatureWrapper>
      </Content>
    </Container>
  );
};