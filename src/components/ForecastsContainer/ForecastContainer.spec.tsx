import { render } from "@testing-library/react";
import { ForecastsContainer } from ".";

const SomeComponent = () => {
  return (
    <h1>Some title</h1>
  )
}

describe('ForecastContainer Component', () => {
  it('should render the component', () => {
    const component = render(
      <ForecastsContainer>
        <SomeComponent />
      </ForecastsContainer>
    )

    expect(component).toMatchSnapshot();
  });
});