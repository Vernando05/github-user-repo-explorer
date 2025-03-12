import { render, screen } from '@testing-library/react';
import { Label } from './label';

describe('Label', () => {
  it('should show the label', () => {
    render(
      <Label>
        Label
      </Label>,
    );

    const label = screen.getByText('Label');

    expect(label).toBeInTheDocument();
  });
});
