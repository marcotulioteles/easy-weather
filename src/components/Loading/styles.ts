import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

type DotProps = {
  delay: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Text = styled.h1`
  font-weight: normal;
  font-size: 1.5rem;
`;

export const LoadingTextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: 75%;
`;

export const BounceAnimation = keyframes`
  0% {
    margin-bottom: 0;
  }
  
  50% {
    margin-bottom: 0.33rem;
  }
  
  100% {
    margin-bottom: 0;
  }
`;

export const Dot = styled.div<DotProps>`
  background-color: ${theme.COLORS.TEXT};
  border-radius: 50%;
  width: 0.25rem;
  height: 0.25rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;
