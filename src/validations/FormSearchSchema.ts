import { z } from 'zod';

export const FormSearchSchema = z.object({
  username: z.string().min(2, {
    message: 'Type at least 2 chracters',
  }),
});
