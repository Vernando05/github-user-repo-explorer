import { fireEvent, render, screen } from '@testing-library/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

const setup = () => render(
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>
        Content
      </AccordionContent>
    </AccordionItem>
  </Accordion>,
);

describe('Accordion', () => {
  it('should show the accordion item', () => {
    setup();
    const item = screen.getByText('Title');
    const content = screen.queryByText('Content');

    expect(item).toBeVisible();
    expect(content).not.toBeInTheDocument();
  });

  it('should toggle the accordion content', () => {
    setup();
    const item = screen.getByText('Title');
    fireEvent.click(item);
    const content = screen.getByText('Content');

    expect(content).toBeInTheDocument();

    fireEvent.click(item);
    const contentQuery = screen.queryByText('Content');

    expect(contentQuery).not.toBeInTheDocument();
  });
});
