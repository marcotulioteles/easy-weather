import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0.5rem 0;
`;

export const Hour = styled.p`
  color: ${theme.COLORS.BUTTON_BACKGROUND};
  font-size: 0.75rem;
`;

export const IconWrapper = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin: 0.25rem 0;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TemperatureNumber = styled.p`
  font-size: 0.75rem;
`;

export const TemperatureCelsiusSymbol = styled.p`
  font-family: 'Barlow Semi Condensed', 'Arial', sans-serif;
  font-size: 0.6rem;
`;