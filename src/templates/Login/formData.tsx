import { LockIcon, PhoneIcon } from '@chakra-ui/icons';
import { FieldTypeEnum, FormData } from 'components';
import { authSchema } from 'types/auth';
import { formatPhoneNumber } from 'utils/masks';

export const formData: FormData = {
  title: 'Login',
  description: 'Preencha os campos abaixo com seus dados de acesso para ter acesso à plataforma.',
  content: {
    fieldset: [
      {
        name: 'phone',
        type: FieldTypeEnum.Input,
        inputSettings: {
          label: 'Telefone',
          iconLeft: <PhoneIcon color="gray.300" />,
          mask: formatPhoneNumber,
          placeholder: '(00) 00000-0000',
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
    ],
    submit: {
      label: 'Entrar',
    },
    schemaValidation: authSchema,
  },
};
