import {
  CelsiusSign,
  Container,
  Content,
  Temperature,
  TemperatureWrapper
} from "./styles";
import { ForecastSideInfo } from '../ForecastSideInfo';
import { useGetForecasts } from '../../hooks/forecasts';
import { convertKelvinToCelsius } from '../../utils';
import { IconsAndDescription } from '../IconsAndDescription';

export function ForecastCard() {
  const { forecast } = useGetForecasts();

  return (
    <>
      {forecast?.current?.weather[0].description &&
        <Container>
          <ForecastSideInfo />
          <Content>
            <IconsAndDescription
              description={forecast?.current?.weather[0].description}
              iconName={forecast?.current?.weather[0].icon}
              iconSize={96}
            />
            <TemperatureWrapper>
              <Temperature>{convertKelvinToCelsius(forecast?.current?.temp)}</Temperature>
              <CelsiusSign>°C</CelsiusSign>
            </TemperatureWrapper>
          </Content>
        </Container>
      }
    </>
  );
};