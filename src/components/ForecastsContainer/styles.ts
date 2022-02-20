import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  min-height: 220px;
  margin-top: 24px;
  background-color: ${theme.COLORS.BOX_BACKGROUND};
  border-radius: 8px;

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