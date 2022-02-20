import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  background-color: ${theme.COLORS.BOX_BACKGROUND};
  border: 1px solid ${theme.COLORS.BOX_BORDER};
  color: ${theme.COLORS.TEXT}; 
  border-radius: 8px;
  margin-top: 16px;
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 0 16px;
  outline: none;

  &::placeholder {
    color: ${theme.COLORS.PLACEHOLDER_TEXT}
  }
`;