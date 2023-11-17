import { commonValidators } from 'common/validations';
import { z } from 'zod';

export enum UserTypeEnum {
  OWNER = 'owner',
  EMPLOYEE = 'employee',
}

export const userSchema = z.object({
  fullName: commonValidators.string,
  phone: commonValidators.phone,
});

export const registerUserSchema = userSchema.extend({
  password: commonValidators.createPassword,
  confirmPassword: commonValidators.string,
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: 'As senhas devem ser idênticas',
  path: ['confirmPassword'],
});

export type CreateUserForm = z.infer<typeof registerUserSchema>;
export type CreateUserDTO = Omit<z.infer<typeof registerUserSchema>, 'confirmPassword'> & {
  roles: UserTypeEnum[];
  shedName?: string;
  shedCode?: string;
};
