import { WiCelsius } from 'react-icons/wi';

import {
  CelsiusSign,
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
    <>
      {forecast?.weather?.description &&
        <Container>
          <ForecastSideInfo />
          <Content>
            <WiDayCloudyHigh size={96} />
            <Description>{forecast?.weather?.description}</Description>
            <TemperatureWrapper>
              <Temperature>{convertKelvinToCelsius(forecast?.main?.temp)}</Temperature>
              <CelsiusSign>°C</CelsiusSign>
            </TemperatureWrapper>
          </Content>
        </Container>
      }
    </>
  );
};