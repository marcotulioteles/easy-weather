import { render } from "@testing-library/react";
import { EmptyState } from ".";

describe('Empty State Component', () => {
  it('should render the component', () => {
    const component = render(
      <EmptyState />
    )

    expect(component).toMatchSnapshot();
  });
});