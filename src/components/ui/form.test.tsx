import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from './form';

const FormStub = () => {
  const methods = useForm();
  return (
    <Form {...methods}>
      <form>
        <FormField
          name="username"
          render={() => (
            <FormItem>
              <FormControl>
                <input defaultValue="JohnDoe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

const setup = () => render(
  <FormStub />,
);

describe('Form', () => {
  it('should show the form', () => {
    setup();
    const field = screen.getByDisplayValue('JohnDoe');

    expect(field).toBeInTheDocument();
  });
});
