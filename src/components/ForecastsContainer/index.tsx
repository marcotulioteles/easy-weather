import { ReactNode } from "react";
import { Container, Title } from "./styles";

type Props = {
  children: ReactNode;
}

export function ForecastsContainer({ children }: Props) {
  return (
    <Container>
      <Title>FORECAST</Title>
      {children}
    </Container>
  );
}