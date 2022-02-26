import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDaySleet,
  WiDaySunny,
  WiMoonNew,
  WiNightAltCloudy,
  WiNightAltShowers,
  WiShowers,
  WiSnowflakeCold,
  WiThunderstorm,
  WiWindy,
} from 'react-icons/wi';

const weatherIcons = [
  { name: '01d', icon: <WiDaySunny /> },
  { name: '01n', icon: <WiMoonNew /> },
  { name: '02d', icon: <WiDayCloudy /> },
  { name: '02n', icon: <WiNightAltCloudy /> },
  { name: '03d', icon: <WiCloud /> },
  { name: '03n', icon: <WiCloud /> },
  { name: '04d', icon: <WiCloudy /> },
  { name: '04n', icon: <WiCloudy /> },
  { name: '09d', icon: <WiShowers /> },
  { name: '09n', icon: <WiShowers /> },
  { name: '10d', icon: <WiDaySleet /> },
  { name: '10n', icon: <WiNightAltShowers /> },
  { name: '11d', icon: <WiThunderstorm /> },
  { name: '11n', icon: <WiThunderstorm /> },
  { name: '13d', icon: <WiSnowflakeCold /> },
  { name: '13n', icon: <WiSnowflakeCold /> },
  { name: '50d', icon: <WiWindy /> },
  { name: '50n', icon: <WiWindy /> },
]

export { weatherIcons }