import { FiSearch } from 'react-icons/fi';
import {
  Container,
  InputField
} from './styles';

import { theme } from '../../styles/theme';

export function Input() {
  return (
    <Container>
      <InputField
        placeholder='your location e.g.: (New York, United States)'
      />
      <FiSearch
        color={theme.COLORS.BOX_BORDER}
        size={16}
        style={{ marginRight: 12 }}
      />
    </Container>
  );
};