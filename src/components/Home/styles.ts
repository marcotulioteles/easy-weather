import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HourlyForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2.25rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const SearchTimeTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchTimeTitleText = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
  margin-left: 0.5rem;
`;

export const SearchTimeHour = styled.h3`
  font-size: 3.5rem;
  font-weight: 100;
`;