import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  @media (min-width: 1200px) {
    max-width: 1200px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    min-width: 320px;
  }
`;

export const LogoAndDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1200px) {
    align-items: center;
  }
`;

export const AppTitle = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  margin-top: 12px;

  &strong {
    font-family: ${theme.FONTS.TITLE};
  }

  @media (min-width: 1200px) {
    margin-left: 12px;
  }
`

export const DateContainer = styled.div`
  display: flex;
  margin-top: 1.2rem;
`;

export const DateText = styled.p`
  font-size: 1rem;
  color: ${theme.COLORS.TEXT};
  margin-left: 12px;
`;

export const ResearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1020px) {
    max-width: 480px;
  }
`;

export const Location = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    margin-top: 1.5rem;
  }
`;

export const LocationText = styled.p`
  font-size: 2rem;
  margin-left: 0.5rem;
`;