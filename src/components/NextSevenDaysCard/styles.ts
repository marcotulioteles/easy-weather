import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  min-width: 13.75rem;
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(158.55deg, rgba(255, 255, 255, 0.15) 2.41%, rgba(196, 196, 196, 0) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  margin-top: 1rem;

  @media (min-width: 1200px) {
    margin-top: 0;
  }
  
  @media (min-width: 440px) {
    min-width: 25rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.COLORS.PLACEHOLDER_TEXT};
  margin-top: 1rem;
`;

export const Title = styled.h1`
  font-size: 1rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.75rem;
  margin-bottom: 1.625rem;
`;

export const DayLine = styled.div`
  width: 87.5%;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  border-bottom: 0.5px solid #576675;
`;

export const DayOfTheWeek = styled.p`
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
`;

export const TemperatureNumber = styled.p`
`;

export const MaxAndMinTemperature = styled.div`
  min-width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 440px) {
    min-width: 5.5rem;
  }
`;

