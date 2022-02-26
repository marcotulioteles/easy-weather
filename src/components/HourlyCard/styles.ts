import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 90%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(158.55deg, rgba(255, 255, 255, 0.15) 2.41%, rgba(196, 196, 196, 0) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  margin-top: 1rem;

  @media (min-width: 440px) {
    width: 25rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;  
  color: ${theme.COLORS.PLACEHOLDER_TEXT};
  margin-top: 0.75rem;
`;

export const TitleText = styled.h1`
  font-size: 1rem;  
  font-weight: 700;
`;

export const HourlyContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  padding-bottom: 0.5rem;
  margin-bottom: 0.75rem;

  @media (min-width: 440px) {
    max-width: 22rem;
  }
`;