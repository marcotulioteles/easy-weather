import { WiDaySunny, WiDirectionDown } from "react-icons/wi";
import {
  Container,
  Content,
  DayLine,
  DayOfTheWeek,
  TemperatureNumber,
  TemperatureWrapper,
  Title,
  TitleWrapper,
  MaxAndMinTemperature
} from "./styles";

export function ForecastDayLine() {
  return (
    <DayLine>
      <DayOfTheWeek>Thursday</DayOfTheWeek>
      <WiDaySunny />
      <MaxAndMinTemperature>
        <TemperatureWrapper>
          <WiDirectionDown />
          <TemperatureNumber>21°C</TemperatureNumber>
        </TemperatureWrapper>
        <TemperatureWrapper>
          <WiDirectionDown />
          <TemperatureNumber>32°C</TemperatureNumber>
        </TemperatureWrapper>
      </MaxAndMinTemperature>
    </DayLine>
  )
}

const Days = [1, 2, 3, 4, 5, 6, 7];

export function NextSevenDaysCard() {
  return (
    <Container>
      <TitleWrapper>
        <Title>next 7 days</Title>
      </TitleWrapper>
      <Content>
        {Days.map(item => (<ForecastDayLine key={`forecast-day-line-${item}`} />))}
      </Content>
    </Container>
  );
}