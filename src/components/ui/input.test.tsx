import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './input';

describe('Input', () => {
  it('should show the input', () => {
    render(
      <Input
        type="text"
        placeholder="Type your name"
      />,
    );

    const input = screen.getByPlaceholderText('Type your name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'John Doe' } });

    expect(input.value).toBe('John Doe');
  });
});
