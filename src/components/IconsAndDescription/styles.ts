import styled from 'styled-components';

type IconWrapperProps = {
  iconSize: number
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 0.85rem;
  max-width: 5rem;
  text-align: center;
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  max-height: 5rem;
  font-size: ${({ iconSize }) => `${iconSize}px`};
`;