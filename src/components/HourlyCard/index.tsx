import { useGetForecasts } from "../../hooks/forecasts";
import { hourFormatted } from "../../utils";
import { HourlyElement } from "../HourlyElement";
import {
  Container,
  HourlyContainer,
  TitleText,
  TitleWrapper
} from "./styles";

export function HourlyCard() {
  const { forecast } = useGetForecasts();

  return (
    <Container>
      <TitleWrapper>
        <TitleText>hourly forecast</TitleText>
      </TitleWrapper>
      <HourlyContainer>
        {forecast.hourly.map((item, index) => (
          <HourlyElement
            key={`hourly-${index}`}
            hour={hourFormatted(item.dt)}
            iconName={item.weather[0].icon}
            temperature={item.temp.toString()}
          />
        ))}
      </HourlyContainer>
    </Container>
  );
};