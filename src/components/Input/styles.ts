import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  background-color: ${theme.COLORS.BOX_BACKGROUND};
  border: 1px solid ${theme.COLORS.BLUE_APP};
  color: ${theme.COLORS.TEXT}; 
  border-radius: 0.5rem;
  margin-top: 1rem;
  position: relative;
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 0 1rem;
  outline: none;
  font-size: 1.25rem;
  text-align: center;

  &::placeholder {
    color: ${theme.COLORS.LIGHT_GREY_APP};
    font-size: 1rem;
  }
`;