import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoaderCircleIcon } from 'lucide-react';

const FormSearch = ({ form, isLoading, onSubmitForm }: any) => {
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitForm)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormMessage className="my-0!" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full w-xl-auto"
          >
            {
              isLoading
                ? (
                    <>
                      Searching
                      <LoaderCircleIcon className="animate-spin" />
                    </>
                  )
                : 'Search'
            }
          </Button>
        </form>
      </Form>
    </>
  );
};

export default FormSearch;
