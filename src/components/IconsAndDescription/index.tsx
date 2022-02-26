import { weatherIcons } from '../../utils/weather-icons-constant';
import { Container, Description, IconWrapper } from "./styles";

interface Props {
  iconName: string;
  iconSize: number;
  description: string;
}

export function IconsAndDescription({ iconName, description, iconSize }: Props) {
  return (
    <Container>
      <IconWrapper iconSize={iconSize}>
        {weatherIcons.find(el => el.name === iconName)?.icon}
      </IconWrapper>
      <Description>{description}</Description>
    </Container>
  );
};