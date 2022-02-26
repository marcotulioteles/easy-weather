import { weatherIcons } from "../../utils/weather-icons-constant";
import {
  Container,
  Hour,
  IconWrapper,
  TemperatureCelsiusSymbol,
  TemperatureNumber,
  TemperatureWrapper
} from "./styles";

export function HourlyElement() {
  return (
    <Container>
      <Hour>16:00</Hour>
      <IconWrapper>
        {weatherIcons.find(item => item.name === '01d')?.icon}
      </IconWrapper>
      <TemperatureWrapper>
        <TemperatureNumber>28</TemperatureNumber>
        <TemperatureCelsiusSymbol>°C</TemperatureCelsiusSymbol>
      </TemperatureWrapper>
    </Container>
  );
};