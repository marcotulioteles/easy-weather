import {
  convertKelvinToCelsius,
  convertKelvinToFahrenheit,
  generateDateNow,
  hourFormatted
} from '.';

describe('Functions Utils', () => {
  it('should convert kelvin temperature to celsius', () => {
    const kelvinValue = 253;
    const valueConverted = convertKelvinToCelsius(kelvinValue);
    const valueExpected = '-20';
    expect(valueConverted).toStrictEqual(valueExpected);
  });

  it('should convert kelvin temperature to farenheit', () => {
    const kelvinValue = 253;
    const valueConverted = convertKelvinToFahrenheit(kelvinValue);
    const valueExpected = '-4.3';
    expect(valueConverted).toStrictEqual(valueExpected);
  });
});