import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  min-height: 220px;
  margin-top: 24px;
  background: radial-gradient(100% 1406.25% at 0% 100%, #0E1D28 28.5%, #193449 60.32%);
  border-radius: 8px;
  padding-bottom: 36px;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Title = styled.h1`
  font-weight: normal;
  font-size: 1.2rem;
  color: ${theme.COLORS.PLACEHOLDER_TEXT};
  margin-top: 24px;
`;