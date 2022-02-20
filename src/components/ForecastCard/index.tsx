import { Container, Description, Temperature } from "./styles";
import { WiDayCloudyHigh } from 'react-icons/wi';

export function ForecastCard() {
  return (
    <Container>
      <WiDayCloudyHigh size={56} />
      <Description>partly cloudy</Description>
      <Temperature>28°</Temperature>
    </Container>
  );
};