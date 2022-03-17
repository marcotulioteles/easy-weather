import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { Header } from ".";
import { ForecastsContext } from "../../hooks/forecasts";
import { ForecastData, LocationData } from "../../hooks/types";
import { mockedForecastResponse, mockedLocationResponse } from "../../tests/__mocks__";

const useForecastValues = {
  locationInput: 'anyLocation',
  locationResponse: {} as LocationData,
  setLocationInput: jest.fn(),
  error: false,
  forecast: {} as ForecastData,
  loading: false,
  isEmpty: false
}

describe('Header Component', () => {
  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should render the component', () => {
    const component = render(
      <Header />
    )

    expect(component).toMatchSnapshot();
  });

  it('should call onClick function when click on search button', () => {
    const component = render(
      <ForecastsContext.Provider value={useForecastValues}>
        <Header />
      </ForecastsContext.Provider>
    )
    const button = component.getByText('search');

    fireEvent.click(button);

    expect(useForecastValues.setLocationInput).toBeCalled();
  });

  it('should to be able to type on location input search', () => {
    const component = render(
      <ForecastsContext.Provider value={useForecastValues}>
        <Header />
      </ForecastsContext.Provider>
    )

    const placeholder = 'Your location e.g.: (New York, US)'

    const input = component.getByPlaceholderText(placeholder) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'some location' } });

    expect(input.value).toBe('some location');
  });

  it('should button have the disabled attribute when loading and isEmpty is false', () => {
    const component = render(
      <ForecastsContext.Provider value={
        { ...useForecastValues, loading: true }
      }>
        <Header />
      </ForecastsContext.Provider>
    )

    const button = component.getByRole(/button/);

    fireEvent.click(button);

    expect(button).toHaveAttribute('disabled');
  });

  it('should render location component only if it has data and loading is false', () => {
    const component = render(
      <ForecastsContext.Provider value={
        { ...useForecastValues, forecast: mockedForecastResponse, locationResponse: mockedLocationResponse }
      }>
        <Header />
      </ForecastsContext.Provider>
    )

    expect(component.getByText('City')).toBeInTheDocument();
  });
});