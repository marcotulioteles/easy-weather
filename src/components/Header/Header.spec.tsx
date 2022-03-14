import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { Header } from ".";
import { ForecastsContext } from "../../hooks/forecasts";
import { ForecastData, LocationData } from "../../hooks/types";

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

  it('should to be able to type on locaation input search', () => {
    const component = render(
      <ForecastsContext.Provider value={useForecastValues}>
        <Header />
      </ForecastsContext.Provider>
    )

    const input = component.getByText('search');

    fireEvent.change(input, { target: { value: 'some location' } });
  });
});