import { render, screen } from '@testing-library/react';
import { Skeleton } from './skeleton';

describe('Skeleton', () => {
  it('should show the skeleton', () => {
    render(
      <Skeleton data-testid="skeleton">
        Label
      </Skeleton>,
    );

    const skeleton = screen.getByTestId('skeleton');

    expect(skeleton).toHaveClass('bg-primary/10 animate-pulse rounded-md');
    expect(skeleton).toBeInTheDocument();
  });
});
