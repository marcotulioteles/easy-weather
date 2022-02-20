import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.button`
  width: 100%;
  height: 2.25rem;
  background-color: ${theme.COLORS.BUTTON_BACKGROUND};
  color: ${theme.COLORS.BOX_BACKGROUND};
  border: none;
  border-radius: 8px;
  margin-top: 12px;
  transition: all 0.2s ease-in;
  transition-property: background-color, color;

  &:hover {
    background-color: '#1B8E65';
    color: ${theme.COLORS.TEXT};
  }
  `;