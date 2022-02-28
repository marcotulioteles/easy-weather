import {
  CelsiusSign,
  Container,
  Content,
  MinAndMaxTempContainer,
  MinMaxTemperature,
  MinMaxTemperatureWrapper,
  Temperature,
  TemperatureWrapper,
  Title,
  TitleWrapper,
  MainContent
} from "./styles";
import { ForecastSideInfo } from '../ForecastSideInfo';
import { useGetForecasts } from '../../hooks/forecasts';
import { convertKelvinToCelsius } from '../../utils';
import { IconsAndDescription } from '../IconsAndDescription';
import { FiCalendar } from "react-icons/fi";
import { WiDirectionUp, WiThermometer } from "react-icons/wi";
import { theme } from "../../styles/theme";

export function ForecastCard() {
  const { forecast } = useGetForecasts();

  return (
    <>
      {forecast?.current?.weather[0].description &&
        <Container>
          <TitleWrapper>
            <FiCalendar size={18} />
            <Title>today</Title>
          </TitleWrapper>

          <MainContent>
            <ForecastSideInfo />
            <Content>
              <IconsAndDescription
                description={forecast?.current?.weather[0].description}
                iconName={forecast?.current?.weather[0].icon}
                iconSize={80}
              />
              <TemperatureWrapper>
                <Temperature>{convertKelvinToCelsius(forecast?.current?.temp)}</Temperature>
                <CelsiusSign fontSize='2.5'>°C</CelsiusSign>
              </TemperatureWrapper>
            </Content>
          </MainContent>

          <MinAndMaxTempContainer>
            <WiThermometer size={32} color={theme.COLORS.LIGHT_YELLOW_APP} />
            <MinMaxTemperatureWrapper>
              <WiDirectionUp size={24} style={{ rotate: '180deg' }} color={theme.COLORS.BLUE_APP} />
              <MinMaxTemperature>{convertKelvinToCelsius(forecast.current.min_temp)}</MinMaxTemperature>
              <CelsiusSign fontSize='1'>°C</CelsiusSign>
            </MinMaxTemperatureWrapper>
            <MinMaxTemperatureWrapper>
              <WiDirectionUp size={24} color={theme.COLORS.RED_APP} />
              <MinMaxTemperature>{convertKelvinToCelsius(forecast.current.max_temp)}</MinMaxTemperature>
              <CelsiusSign fontSize='1'>°C</CelsiusSign>
            </MinMaxTemperatureWrapper>
          </MinAndMaxTempContainer>
        </Container>
      }
    </>
  );
};