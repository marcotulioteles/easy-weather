import { useEffect } from "react";
import { useGetForecasts } from "../../hooks/forecasts";
import { ForecastCard } from "../ForecastCard";
import { ForecastsContainer } from "../ForecastsContainer";
import { Header } from "../Header";
import { HourlyCard } from "../HourlyCard";
import { NextSevenDaysCard } from "../NextSevenDaysCard";
import { Container } from "./styles";

export function HomeContent() {
  const { forecast } = useGetForecasts();

  return (
    <Container>
      <Header />
      <ForecastsContainer>
        {forecast.current &&
          <>
            <ForecastCard />
            <HourlyCard />
            <NextSevenDaysCard />
          </>
        }
      </ForecastsContainer>
    </Container>
  )
}