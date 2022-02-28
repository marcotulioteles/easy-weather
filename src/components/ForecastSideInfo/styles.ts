import styled from 'styled-components';

export const Container = styled.div`
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.75rem;
`;

export const ContainerSideInfo = styled.div`
  width: 4rem;
  height: 1.25rem;
  display: flex;
  justify-content: space-around ;
  align-items: center;  
`;

export const SideInfoText = styled.p`
  font-size: 0.75rem;
`;