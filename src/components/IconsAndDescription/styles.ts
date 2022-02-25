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
  font-size: normal;
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  max-height: 6rem;
  font-size: ${({ iconSize }) => `${iconSize}px`};
`;