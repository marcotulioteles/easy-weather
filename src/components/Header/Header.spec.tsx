import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { Header } from ".";
import { handleOnClickSearchButton } from './utils';

jest.mock('./utils', () => ({ handleOnClickSearchButton: jest.fn() }));

describe('Header Component', () => {
  it('should render the component', () => {
    const component = render(
      <Header />
    )

    expect(component).toMatchSnapshot();
  });

  it('should call onClick function when click on search button', () => {
    const component = render(
      <Header />
    )

    const button = component.getByText('search');

    fireEvent.click(button);

    expect(handleOnClickSearchButton).toBeCalled();
  });
});