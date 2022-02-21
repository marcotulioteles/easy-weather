import {
  Container
} from './styles';

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined;
  name: string
}

export function Button({ type, name }: Props) {
  return (
    <Container type={type}>{name}</Container>
  );
};