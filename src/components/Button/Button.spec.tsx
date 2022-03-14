import { render } from "@testing-library/react";
import { Button } from ".";
import { fireEvent } from '@testing-library/dom';

const onClickFn = jest.fn();

describe('Button Component', () => {
  it('should render the component', () => {
    const component = render(
      <Button
        disabled={false}
        name='Test button'
        onClick={() => { }}
        loading={false}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('should render the name Button', () => {
    const component = render(
      <Button
        disabled={false}
        name='Another test button name'
        onClick={() => { }}
        loading={false}
      />
    );

    expect(component.getByText('Another test button name')).toBeInTheDocument();
  });

  it('should render the loading spinner', () => {
    const component = render(
      <Button
        disabled={false}
        name='Button name test'
        onClick={() => { }}
        loading={false}
      />
    );

    expect(component.queryByTestId('loading-spinner-icon')).not.toBeInTheDocument();
  });

  it('should disable the click on button', () => {
    const component = render(
      <Button
        disabled={true}
        name='Button test name'
        onClick={onClickFn}
      />
    );

    fireEvent.click(component.getByRole(/button/));

    expect(onClickFn).not.toBeCalled();
  });

  it('should call onClick function when click on Button', () => {
    const component = render(
      <Button
        disabled={false}
        name='Click here'
        onClick={onClickFn}
      />
    );

    fireEvent.click(component.getByText('Click here'));

    expect(onClickFn).toBeCalled();
  });
});