import { useEffect } from "react";
import { WiDaySunny, WiDirectionDown } from "react-icons/wi";
import { useGetForecasts } from "../../hooks/forecasts";
import { convertKelvinToCelsius } from "../../utils";
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

interface Props {
  dayOfTheWeek: string;
  minTemperature: string;
  maxTemperature: string;
}

export function ForecastDayLine({ dayOfTheWeek, maxTemperature, minTemperature }: Props) {
  return (
    <DayLine>
      <DayOfTheWeek>{dayOfTheWeek}</DayOfTheWeek>
      <WiDaySunny />
      <MaxAndMinTemperature>
        <TemperatureWrapper>
          <WiDirectionDown />
          <TemperatureNumber>{minTemperature}°C</TemperatureNumber>
        </TemperatureWrapper>
        <TemperatureWrapper>
          <WiDirectionDown />
          <TemperatureNumber>{maxTemperature}°C</TemperatureNumber>
        </TemperatureWrapper>
      </MaxAndMinTemperature>
    </DayLine>
  )
}

const extractDayOfTheWeekString = (date: number) => {
  const dateFormatted = Intl.DateTimeFormat('en-US', {
    weekday: 'long'
  }).format(date * 1000);

  return dateFormatted;
}

export function NextSevenDaysCard() {
  const { forecast } = useGetForecasts();

  useEffect(() => {
    console.log(extractDayOfTheWeekString(forecast.daily[0].dt))
  }, [forecast]);

  return (
    <Container>
      <TitleWrapper>
        <Title>next 7 days</Title>
      </TitleWrapper>
      <Content>
        {forecast.daily.map((item, index) => (
          <ForecastDayLine
            key={`forecast-day-line-${index}`}
            dayOfTheWeek={extractDayOfTheWeekString(item.dt)}
            maxTemperature={convertKelvinToCelsius(item.temp.max)}
            minTemperature={convertKelvinToCelsius(item.temp.min)}
          />
        ))}
      </Content>
    </Container>
  );
}