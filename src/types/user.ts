import { z } from 'zod';

export const userOfficeSchema = z.object({
  name: z.string().min(1, ''),
});

export type CreateUserDTO = z.infer<typeof userOfficeSchema>;
