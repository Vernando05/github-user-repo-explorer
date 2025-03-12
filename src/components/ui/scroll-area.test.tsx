import { render, screen } from '@testing-library/react';
import {
  ScrollArea,
} from './scroll-area';

describe('ScrollArea', () => {
  it('should show the scroll', () => {
    render(
      <ScrollArea className="h-10">
        <p className="h-40">Hello</p>
      </ScrollArea>,
    );

    const hello = screen.getByText('Hello');

    expect(hello).toBeInTheDocument();
  });
});
