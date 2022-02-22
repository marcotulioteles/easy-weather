import styled from "styled-components";

export const Container = styled.div`
  min-width: 220px;
  min-height: 228px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  background: linear-gradient(158.55deg, rgba(255, 255, 255, 0.15) 2.41%, rgba(196, 196, 196, 0) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
`;

export const Content = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 12px;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Temperature = styled.h2`
  font-weight: normal;
  font-size: 4rem;
  margin-right: 32px;
`;