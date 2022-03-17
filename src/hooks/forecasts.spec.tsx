import { fireEvent, render } from '@testing-library/react';
import React, { FormEvent, useState } from 'react';
import { ForecastsContext, ForecastsProvider, useGetForecasts } from './forecasts';
import { ForecastData, LocationData } from './types';

const Component = () => {
  const {
    locationInput,
    locationResponse,
    setLocationInput,
    error,
    forecast,
    loading,
    isEmpty
  } = useGetForecasts();

  const [locationInputValue, setLocationInputValue] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocationInput(locationInputValue)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={event => setLocationInputValue(event.target.value)}
          data-testid='input-location'
        />
        <button type='submit' data-testid='button-submit'>Click here</button>
      </form>
      <p data-testid='location-name'>{locationInput}</p>
      <p data-testid='location-country'>{locationResponse.country}</p>
      {error && <p>This is a error!</p>}
      {loading && <p>This a loading...</p>}
      {isEmpty && <p>This is a empty state!</p>}
      {forecast?.current && <h1>{forecast.current.temp}</h1>}
    </>
  );
}

describe('Forecast Context', () => {
  it('should call de setLocationInput function', () => {
    const component = render(
      <ForecastsProvider>
        <Component />
      </ForecastsProvider>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render the location input inside the document', () => {
    const { getByTestId } = render(
      <ForecastsProvider>
        <Component />
      </ForecastsProvider>
    );

    const input = getByTestId('input-location');
    const button = getByTestId('button-submit');

    fireEvent.change(input, { target: { value: 'any city' } });
    fireEvent.click(button);

    expect(getByTestId('location-name')).toHaveTextContent('any city');
  });
});