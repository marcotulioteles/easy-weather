import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppTitle = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  margin-top: 12px;

  &strong {
    font-family: ${theme.FONTS.TITLE};
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