import { render, screen } from '@testing-library/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';

describe('Card', () => {
  it('should show the card', () => {
    render(
      <Card
        className="mb-4"
      >
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Subtitle</CardDescription>
        </CardHeader>
        <CardContent>
          Content
        </CardContent>
        <CardFooter>
          Footer
        </CardFooter>
      </Card>,
    );

    const title = screen.getByText('Title');
    const subtitle = screen.getByText('Subtitle');
    const content = screen.getByText('Content');
    const footer = screen.getByText('Footer');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
