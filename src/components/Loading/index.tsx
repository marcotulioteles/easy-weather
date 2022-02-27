import Image from "next/image";
import { Container, Dot, LoadingTextWrapper, Text } from "./styles";

export function Loading() {
  return (
    <Container>
      <Image
        src='/images/weather-loading.gif'
        alt='weather-loading'
        width={160}
        height={160}
      />
      <LoadingTextWrapper>
        <Text>Loading</Text>
        <Dot delay='0s' />
        <Dot delay='0.1s' />
        <Dot delay='0.2s' />
      </LoadingTextWrapper>
    </Container>
  );
};