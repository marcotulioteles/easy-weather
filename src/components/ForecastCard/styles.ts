import styled, { ThemeConsumer } from "styled-components";
import { theme } from "../../styles/theme";

type CelsiusSignProps = {
  fontSize: string;
}

export const Container = styled.div`
  min-width: 13.75rem;
  min-height: 14.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(158.55deg, rgba(255, 255, 255, 0.15) 2.41%, rgba(196, 196, 196, 0) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  position: relative;

  @media (max-width: 1200px) {
    margin-top: 0.75rem;
  }
`;

export const MainContent = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
`;

export const Content = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.75rem;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Temperature = styled.h2`
  font-weight: normal;
  font-size: 4rem;
`;

export const CelsiusSign = styled.p<CelsiusSignProps>`
  font-family: 'Barlow Semi Condensed', 'Arial', sans-serif;
  font-size: ${props => `${props.fontSize}rem`};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.COLORS.LIGHT_GREY_APP};
  position: absolute;
  top: 0.75rem;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.25rem;
`;

export const MinAndMaxTempContainer = styled.div`
  width: 11.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.75rem 0;
  border-top: 1px solid ${theme.COLORS.MEDIUM_GREY_APP};
  border-bottom: 1px solid ${theme.COLORS.MEDIUM_GREY_APP};
`;

export const MinMaxTemperatureWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MinMaxTemperature = styled.p`
  font-size: 1.125rem;
`;
