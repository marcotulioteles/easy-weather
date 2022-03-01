import { FiSearch } from "react-icons/fi";
import { useGetForecasts } from "../../hooks/forecasts";
import { theme } from "../../styles/theme";
import { hourFormatted } from "../../utils";
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

const generateDateNow = () => {
  const regex = /\d:\d+\s[a-zA-z]+/;
  const date = Date.now();

  const dateFormatted = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'short'
  }).format(date);

  const response = dateFormatted.match(regex) as Array<string>;

  return response[0].toLowerCase();
}

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
                <SearchTimeHour>at {generateDateNow()}</SearchTimeHour>
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