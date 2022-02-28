import { FiSearch } from "react-icons/fi";
import { useGetForecasts } from "../../hooks/forecasts";
import { theme } from "../../styles/theme";
import { ForecastCard } from "../ForecastCard";
import { ForecastsContainer } from "../ForecastsContainer";
import { Header } from "../Header";
import { HourlyCard } from "../HourlyCard";
import { Loading } from "../Loading";
import { NextSevenDaysCard } from "../NextSevenDaysCard";
import {
  Container,
  HourlyForecastContainer,
  SearchTimeHour,
  SearchTimeTitleText,
  SearchTimeTitleWrapper,
  SearchTimeWrapper
} from "./styles";

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
            <HourlyForecastContainer>
              <SearchTimeWrapper>
                <SearchTimeTitleWrapper>
                  <FiSearch size={24} color={theme.COLORS.BLUE_APP} />
                  <SearchTimeTitleText>search time:</SearchTimeTitleText>
                </SearchTimeTitleWrapper>
                <SearchTimeHour>at 8:27 am</SearchTimeHour>
              </SearchTimeWrapper>
              <HourlyCard />
            </HourlyForecastContainer>
            <NextSevenDaysCard />
          </>
        }
      </ForecastsContainer>
    </Container>
  )
}