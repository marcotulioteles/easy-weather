import { WiFahrenheit, WiRaindrops, WiCloudy, WiStrongWind, WiHumidity } from 'react-icons/wi';
import { useGetForecasts } from '../../hooks/forecasts';
import { theme } from '../../styles/theme';
import { convertKelvinToFahrenheit } from '../../utils';

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
  const { forecast } = useGetForecasts();

  return (
    <Container>
      <SideInfoCard textInfo={forecast?.current?.temp.toFixed(1)}>
        <p style={{ marginRight: 9 }}>K</p>
      </SideInfoCard>
      <SideInfoCard textInfo={convertKelvinToFahrenheit(forecast?.current?.temp)}>
        <WiFahrenheit size={36} />
      </SideInfoCard>
      <SideInfoCard textInfo={`${forecast?.current?.humidity.toFixed(0)}%`}>
        <WiHumidity size={28} color={theme.COLORS.BLUE_APP} />
      </SideInfoCard>
      <SideInfoCard textInfo={`${forecast?.current?.clouds.toFixed(0)}%`}>
        <WiCloudy size={28} color={theme.COLORS.RED_APP} />
      </SideInfoCard>
      <SideInfoCard textInfo={`${forecast?.current?.wind_speed.toFixed(2)}m/s`}>
        <WiStrongWind size={28} color={theme.COLORS.GREEN_APP} />
      </SideInfoCard>
    </Container>
  );
}