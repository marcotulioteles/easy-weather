import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(158.55deg, rgba(255, 255, 255, 0.15) 2.41%, rgba(196, 196, 196, 0) 100%);
  border: 1px solid ${theme.COLORS.LIGHT_YELLOW_APP};
  border-radius: 0.75rem;

  @media (max-width: 440px) {
    width: 87.5%;
  }
`;

export const Message = styled.h1`
  max-width: 26.5rem;  
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem 1.5rem;
`;

export const ImageWrapper = styled.div`
  margin-top: 2rem;
`;