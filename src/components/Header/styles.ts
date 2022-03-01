import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;

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

export const AppTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;

  @media (min-width: 1200px) {
    margin-left: 0.75rem;
  }
`

export const AppTitleFirstName = styled.h1`
  font-family: ${theme.FONTS.TITLE};
  font-size: 2.75rem;
  font-weight: normal;
`;

export const AppTitleLastName = styled.p`
  font-family: ${theme.FONTS.TEXT};
  font-size: 2.75rem;
  font-weight: normal;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.2rem;
`;

export const DateText = styled.p`
  font-size: 1rem;
  color: ${theme.COLORS.TEXT};
  margin-left: 0.75rem;
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
  font-size: 1.5rem;
  margin-right: 0.5rem;
  text-align: center;
`;

export const LocationTextContainer = styled.div`
  display: flex; 
  align-items: center;
  margin-top: 0.5rem;
`;