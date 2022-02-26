import styled from "styled-components";

export const Container = styled.div`
  min-width: 13.75rem;
  min-height: 14.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(158.55deg, rgba(255, 255, 255, 0.15) 2.41%, rgba(196, 196, 196, 0) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;

  @media (max-width: 1200px) {
    margin-top: 0.75rem;
  }
`;

export const Content = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Temperature = styled.h2`
  font-weight: normal;
  font-size: 4rem;
`;

export const CelsiusSign = styled.p`
  font-family: 'Barlow Semi Condensed', 'Arial', sans-serif;
  font-size: 2.5rem;
`;