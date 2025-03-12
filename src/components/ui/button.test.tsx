import { render, screen } from '@testing-library/react';
import Link from 'next/link';
import { Button } from './button';

describe('Button', () => {
  it('should show the button', () => {
    const child = <Link href="/login">Login</Link>;
    render(
      <Button
        size="lg"
        type="button"
        variant="ghost"
        asChild
      >
        {child}
      </Button>,
    );

    const baseWithChild = screen.getByText('Login');

    expect(baseWithChild).toHaveAttribute('href', '/login');
    expect(baseWithChild).toHaveAttribute('type', 'button');
    expect(baseWithChild).toHaveClass('h-10 hover:bg-accent');
  });
});
