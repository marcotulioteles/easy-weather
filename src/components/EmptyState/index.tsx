import Image from "next/image";
import { Container, ImageWrapper, Message } from "./styles";

export function EmptyState() {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={'/images/snoopy-umbrella.png'}
          width={147}
          height={121}
          alt='snoopy'
        />
      </ImageWrapper>
      <Message>Your search did not find any data, please try again...</Message>
    </Container>
  );
};