import { render, screen } from '@testing-library/react';
import { BaseTemplate } from './BaseTemplate';

describe('Base template', () => {
  it('should render child', () => {
    const child = <p>Hello</p>;
    render(
      <BaseTemplate>
        {child}
      </BaseTemplate>,
    );

    const baseWithChild = screen.getByText('Hello');

    expect(baseWithChild).toBeInTheDocument();
  });
});
