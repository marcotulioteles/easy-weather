import { WiFahrenheit, WiRaindrops, WiCloudy, WiStrongWind } from 'react-icons/wi';
import { theme } from '../../styles/theme';

import {
  Container,
  ContainerSideInfo,
  SideInfoText
} from "./styles";

type SideInfoCardProps = {
  textInfo: string;
  children?: JSX.Element;
}

function SideInfoCard({ children, textInfo }: SideInfoCardProps) {
  return (
    <ContainerSideInfo>
      <SideInfoText>{textInfo}</SideInfoText>
      {children}
    </ContainerSideInfo>
  );
}

export function ForecastSideInfo() {
  return (
    <Container>
      <SideInfoCard textInfo='301.1'><p style={{ marginLeft: 12 }}>K</p></SideInfoCard>
      <SideInfoCard textInfo='82.4'><WiFahrenheit size={36} /></SideInfoCard>
      <SideInfoCard textInfo='75%'><WiRaindrops size={36} color={theme.COLORS.BOX_BORDER} /></SideInfoCard>
      <SideInfoCard textInfo='69.5%'><WiCloudy size={28} color={'#C12A69'} /></SideInfoCard>
      <SideInfoCard textInfo='3.09 m/s'><WiStrongWind size={28} color={theme.COLORS.BUTTON_BACKGROUND} /></SideInfoCard>
    </Container>
  );
}