import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  margin-top: 0.75rem;
  position: relative;
`;

export const ButtonElement = styled.button`
  width: 100%;
  height: 2.25rem;
  background-color: ${theme.COLORS.GREEN_APP};
  color: ${theme.COLORS.BOX_BACKGROUND};
  border: none;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in;
  transition-property: background-color, color;
  font-size: 1.25rem;

  &:hover {
    background-color: ${theme.COLORS.DARKER_GREEN_APP};
    color: ${theme.COLORS.TEXT};
  }
  `;

export const SVGWrapper = styled.div`
  position: absolute;
  left: calc(50% - 10px);
  top: calc(50% - 10px);
`;