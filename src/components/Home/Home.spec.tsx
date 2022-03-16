import { render } from '@testing-library/react';
import React from 'react';
import { HomeContent } from '.';
import { ForecastsContext } from '../../hooks/forecasts';
import { ForecastData, LocationData } from '../../hooks/types';
import { mockedForecastResponse, mockedLocationResponse } from '../../tests/__mocks__';

const useForecastValues = {
  locationInput: 'anyLocation',
  locationResponse: {} as LocationData,
  setLocationInput: jest.fn(),
  error: false,
  forecast: {} as ForecastData,
  loading: false,
  isEmpty: false
}

describe('<HomeContent />', () => {
  it('should render the component', () => {
    const component = render(
      <ForecastsContext.Provider value={useForecastValues}>
        <HomeContent />
      </ForecastsContext.Provider>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render the empty state component if isEmpty', () => {
    render(
      <ForecastsContext.Provider value={
        { ...useForecastValues, isEmpty: true }
      }>
        <HomeContent />
      </ForecastsContext.Provider>
    );

    const emptyStateMessage = 'Your search did not find any data, please try again...';

    expect(emptyStateMessage).toBeDefined();
  });

  it('should render loading component', () => {
    const { getByAltText } = render(
      <ForecastsContext.Provider value={
        { ...useForecastValues, loading: true }
      }>
        <HomeContent />
      </ForecastsContext.Provider>
    );

    const loadingIconImage = getByAltText('weather-loading');

    expect(loadingIconImage).toBeInTheDocument();
  });

  it('should render forecast cards information', () => {
    const { getByText } = render(
      <ForecastsContext.Provider value={
        { ...useForecastValues, forecast: mockedForecastResponse, locationResponse: mockedLocationResponse }
      }>
        <HomeContent />
      </ForecastsContext.Provider>
    );

    const getTimeTitle = 'search time:';

    expect(getByText(getTimeTitle)).toBeInTheDocument();
  });
});