import { ForecastCard } from "../ForecastCard";
import { ForecastsContainer } from "../ForecastsContainer";
import { Header } from "../Header";
import { Container } from "./styles";

export function HomeContent() {
  return (
    <Container>
      <Header />
      <ForecastsContainer>
        <ForecastCard />
      </ForecastsContainer>
    </Container>
  )
}