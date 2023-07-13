import { INFO } from 'constants/messages';
import { z } from 'zod';

const validatePhone = (value: string): boolean => {
  const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
  return phoneRegex.test(value);
}

export const authSchema = z.object({
  phone: z.string({ required_error: INFO.RequiredInput }).refine(validatePhone, 'Insira um telefone válido'),
  password: z.string({ required_error: INFO.RequiredInput }).min(8, 'Insira uma senha válida'),
});

export type AuthDTO = z.infer<typeof authSchema>;
export type AuthResponse = {
  access_token: string;
};