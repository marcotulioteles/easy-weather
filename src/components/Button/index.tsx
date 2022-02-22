import {
  Container
} from './styles';

type Props = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  name: string;
  onClick: () => void;
}

export function Button({ type, name, onClick }: Props) {
  return (
    <Container type={type} onClick={onClick}>{name}</Container>
  );
};