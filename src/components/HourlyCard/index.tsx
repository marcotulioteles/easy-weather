import { HourlyElement } from "../HourlyElement";
import {
  Container,
  HourlyContainer,
  TitleText,
  TitleWrapper
} from "./styles";

const hourlyList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function HourlyCard() {
  return (
    <Container>
      <TitleWrapper>
        <TitleText>hourly forecast</TitleText>
      </TitleWrapper>
      <HourlyContainer>
        {hourlyList.map((item, index) => (
          <HourlyElement key={`hourly-${index}`} />
        ))}
      </HourlyContainer>
    </Container>
  );
};