import { useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import { WiDirectionUp } from "react-icons/wi";
import { useGetForecasts } from "../../hooks/forecasts";
import { theme } from "../../styles/theme";
import { convertKelvinToCelsius } from "../../utils";
import { weatherIcons } from "../../utils/weather-icons-constant";
import {
  Container,
  Content,
  DayLine,
  DayOfTheWeek,
  TemperatureNumber,
  TemperatureWrapper,
  Title,
  TitleWrapper,
  MaxAndMinTemperature,
  IconWrapper
} from "./styles";

interface Props {
  dayOfTheWeek: string;
  minTemperature: string;
  maxTemperature: string;
  iconName: string;
}

export function ForecastDayLine({
  dayOfTheWeek,
  maxTemperature,
  minTemperature,
  iconName
}: Props) {
  return (
    <DayLine>
      <DayOfTheWeek>{dayOfTheWeek}</DayOfTheWeek>
      <IconWrapper>
        {weatherIcons.find(item => item.name === iconName)?.icon}
      </IconWrapper>
      <MaxAndMinTemperature>
        <TemperatureWrapper>
          <WiDirectionUp size={20} style={{ rotate: '180deg' }} color={theme.COLORS.BLUE_APP} />
          <TemperatureNumber>{minTemperature}°C</TemperatureNumber>
        </TemperatureWrapper>
        <TemperatureWrapper>
          <WiDirectionUp size={20} color={theme.COLORS.RED_APP} />
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
        <FiCalendar size={18} />
        <Title>next 7 days</Title>
      </TitleWrapper>
      <Content>
        {forecast.daily.map((item, index) => (
          <ForecastDayLine
            key={`forecast-day-line-${index}`}
            dayOfTheWeek={extractDayOfTheWeekString(item.dt)}
            maxTemperature={convertKelvinToCelsius(item.temp.max)}
            minTemperature={convertKelvinToCelsius(item.temp.min)}
            iconName={item.weather[0].icon}
          />
        ))}
      </Content>
    </Container>
  );
}