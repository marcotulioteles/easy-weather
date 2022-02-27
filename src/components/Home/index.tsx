import { useEffect } from "react";
import { useGetForecasts } from "../../hooks/forecasts";
import { ForecastCard } from "../ForecastCard";
import { ForecastsContainer } from "../ForecastsContainer";
import { Header } from "../Header";
import { HourlyCard } from "../HourlyCard";
import { Loading } from "../Loading";
import { NextSevenDaysCard } from "../NextSevenDaysCard";
import { Container } from "./styles";

export function HomeContent() {
  const { forecast, loading } = useGetForecasts();

  return (
    <Container>
      <Header />
      <ForecastsContainer>
        {loading && <Loading />}
        {forecast.current && !loading &&
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