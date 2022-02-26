import { useEffect } from "react";
import { useGetForecasts } from "../../hooks/forecasts";
import { ForecastCard } from "../ForecastCard";
import { ForecastsContainer } from "../ForecastsContainer";
import { Header } from "../Header";
import { HourlyCard } from "../HourlyCard";
import { Container } from "./styles";

export function HomeContent() {
  const { forecast } = useGetForecasts();

  useEffect(() => {
    console.log(forecast)
  }, [forecast]);

  return (
    <Container>
      <Header />
      <ForecastsContainer>
        <ForecastCard />
        <HourlyCard />
      </ForecastsContainer>
    </Container>
  )
}