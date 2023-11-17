import { FieldTypeEnum, FormData } from 'components/others/forms/FormBuilder';
import { formatPhoneNumber } from 'utils/masks';
import { LockIcon, PhoneIcon } from '@chakra-ui/icons';
import { registerUserSchema } from 'types/user';

export const formData: FormData = {
  description: 'Preencha os campos abaixo com suas credenciais para criar sua conta',
  content: {
    schemaValidation: registerUserSchema,
    fieldset: [
      {
        name: 'fullName',
        type: FieldTypeEnum.Input,
        inputSettings: {
          label: 'Seu nome completo',
        },
        fieldSettings: {
          isRequired: true,
        },
      },
      {
        name: 'phone',
        type: FieldTypeEnum.Input,
        inputSettings: {
          label: 'Número de telefone',
          mask: formatPhoneNumber,
          placeholder: '(00) 00000-0000',
          iconLeft: <PhoneIcon color="gray.300" />,
        },
        fieldSettings: {
          isRequired: true,
        },
      },
      {
        name: 'password',
        type: FieldTypeEnum.Password,
        inputSettings: {
          label: 'Senha',
          iconLeft: <LockIcon color="gray.300" />,
        },
        fieldSettings: {
          isRequired: true,
        },
      },
      {
        name: 'confirmPassword',
        type: FieldTypeEnum.Password,
        inputSettings: {
          label: 'Confirme sua senha',
          iconLeft: <LockIcon color="gray.300" />,
        },
        fieldSettings: {
          isRequired: true,
        },
      },
    ],
    submit: {
      label: 'Cadastrar',
    },
  },
};
