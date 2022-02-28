import { convertKelvinToCelsius } from "../../utils";
import { weatherIcons } from "../../utils/weather-icons-constant";
import {
  Container,
  Hour,
  IconWrapper,
  CelsiusSign,
  TemperatureNumber,
  TemperatureWrapper
} from "./styles";

type Props = {
  hour: string;
  iconName: string;
  temperature: string;
}

export function HourlyElement({ hour, iconName, temperature }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>
      <IconWrapper>
        {weatherIcons.find(item => item.name === iconName)?.icon}
      </IconWrapper>
      <TemperatureWrapper>
        <TemperatureNumber>{convertKelvinToCelsius(Number(temperature))}</TemperatureNumber>
        <CelsiusSign>°C</CelsiusSign>
      </TemperatureWrapper>
    </Container>
  );
};