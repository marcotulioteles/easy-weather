export const convertKelvinToCelsius = (temperature: number) => {
  const CELSIUS = temperature - 273.15;

  return CELSIUS.toFixed(0);
}

export const convertKelvinToFahrenheit = (temperature: number) => {
  const CELSIUS = temperature - 273.15;

  const FAHRENHEIT = CELSIUS * 1.8 + 32;

  return FAHRENHEIT.toFixed(1);
}