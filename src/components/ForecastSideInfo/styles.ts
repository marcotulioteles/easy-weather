import styled from 'styled-components';

export const Container = styled.div`
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.75rem;
`;

export const ContainerSideInfo = styled.div`
  width: 5rem;
  height: 1.25rem;
  display: flex;
  justify-content: space-around ;
  align-items: center;  
`;

export const SideInfoText = styled.p`
  font-size: 0.75rem;
`;