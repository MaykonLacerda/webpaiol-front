import { INFO } from 'common/constants/messages';
import { commonValidators } from 'common/validations';
import { z } from 'zod';

export const authSchema = z.object({
  phone: commonValidators.phone,
  password: commonValidators.password,
});

export type AuthDTO = z.infer<typeof authSchema>;
export type AuthResponse = {
  access_token: string;
};