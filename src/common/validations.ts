import { z } from 'zod';
import { INFO } from './constants/messages';

const validatePassword = (value: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-\"!@#%&\/,><\':;|_~`])\S{8,99}$/;
  return passwordRegex.test(value);
}

const validatePhone = (value: string): boolean => {
  const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
  return phoneRegex.test(value);
}

export const commonValidators = {
  id: z.string({ required_error: INFO.RequiredInput }).uuid(),
  fullName: z.string({ required_error: INFO.RequiredInput }).min(1, INFO.RequiredInput),
  phone: z.string({ required_error: INFO.RequiredInput }).min(1, INFO.RequiredInput).refine(validatePhone, 'Insira um telefone válido'),
  password: z.string({ required_error: INFO.RequiredInput }).min(8, 'A senha deve ter ao menos 8 caracteres').refine(validatePassword, 'A senha não segue o padrão correto da plataforma'),
  createPassword: z.string({ required_error: INFO.RequiredInput }).refine(validatePassword, 'Para sua segurança, sua senha deve ter ao menos 8 caracteres, um caractere minúsculo, um caractere maiúsculo, um número e um caractere especial'),
  string: z.string({ required_error: INFO.RequiredInput }),
  stringOptional: z.string().nullable().transform((value) => (
    value === null ? undefined : value
  )).optional(),
  number: z.number({ required_error: INFO.RequiredInput }),
  numberOptional: z.number().optional(),
  boolean: z.boolean({ required_error: INFO.RequiredInput }),
  booleanOptional: z.boolean().optional(),
  date: z.date({ invalid_type_error: INFO.RequiredInput, required_error: INFO.RequiredInput }),
  dateOptional: z.date().nullable().optional(),
};