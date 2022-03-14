import {
  Container,
  ButtonElement,
  SVGWrapper
} from './styles';
import LoadingSpinner from '../../../public/images/loading-spinner-2.svg';

type Props = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  name: string;
  onClick?: () => void;
  disabled: boolean;
  loading?: boolean;
}

export function Button({
  type,
  name,
  onClick,
  disabled,
  loading
}: Props) {
  return (
    <Container>
      {loading &&
        <SVGWrapper>
          <svg><LoadingSpinner width={20} height={20} /></svg>
        </SVGWrapper>
      }
      <ButtonElement
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {!loading && name}
      </ButtonElement>
    </Container>
  );
};