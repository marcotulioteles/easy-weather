import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { Header } from ".";
import { ForecastsContext } from "../../hooks/forecasts";
import { ForecastData, LocationData } from "../../hooks/types";

const mockedForecast = {
  current: {
    temp: 295.7,
    min_temp: 295.7,
    max_temp: 295.7,
    feels_like: 295.79,
    humidity: 68,
    clouds: 0,
    wind_speed: 1.54,
    weather: [
      {
        description: "clear sky",
        icon: "01d"
      }
    ],
  },
  hourly: [
    {
      dt: 1646395200,
      temp: 295.89,
      feels_like: 296,
      humidity: 68,
      clouds: 1,
      wind_speed: 2.37,
      weather: [{
        description: "clear sky",
        icon: "01d"
      }]
    },
    {
      dt: 1646398800,
      temp: 295.7,
      feels_like: 295.79,
      humidity: 68,
      clouds: 0,
      wind_speed: 3.23,
      weather: [
        {
          description: "clear sky",
          icon: "01d"
        }
      ]
    },
    {
      dt: 1646402400,
      temp: 296.49,
      feels_like: 296.6,
      humidity: 66,
      clouds: 2,
      wind_speed: 3.98,
      weather: [
        {
          description: "clear sky",
          icon: "01d"
        }
      ]
    }
  ],
  daily: [
    {
      dt: 1646406000,
      temp: {
        min: 291.07,
        max: 301.04,
      },
      feels_like: {
        day: 297.72,
      },
      humidity: 62,
      clouds: 4,
      wind_speed: 3.98,
      weather: [
        {
          description: "light rain",
          icon: "10d"
        }
      ]
    },
    {
      dt: 1646492400,
      temp: {
        min: 291.6,
        max: 300.02,
      },
      feels_like: {
        day: 300.91,
      },
      humidity: 61,
      clouds: 0,
      wind_speed: 3.53,
      weather: [
        {
          description: "moderate rain",
          icon: "10d"
        }
      ]
    }
  ]
} as ForecastData;

const mockedLocationResponse = {
  name: 'City',
  country: 'Country',
  state: 'State'
}

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
        { ...useForecastValues, forecast: mockedForecast, locationResponse: mockedLocationResponse }
      }>
        <Header />
      </ForecastsContext.Provider>
    )

    expect(component.getByText('City')).toBeInTheDocument();
  });
});