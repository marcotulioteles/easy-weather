import { FiSearch } from 'react-icons/fi';
import {
  Container,
  InputField
} from './styles';

import { theme } from '../../styles/theme';
import { ChangeEvent } from 'react';

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export function Input({ onChange, value }: Props) {
  return (
    <Container>
      <InputField
        placeholder='Your location e.g.: (New York, US)'
        type='text'
        onChange={onChange}
        value={value}
      />
      <FiSearch
        color={theme.COLORS.BLUE_APP}
        size={16}
        style={{ position: 'absolute', left: 12 }}
      />
    </Container>
  );
};