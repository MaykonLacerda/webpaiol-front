import { useForm, FieldValues } from 'react-hook-form';
import { Button } from 'components/commons/form/Button';
import { Input } from 'components/commons/form/Input';
import { InputPassword } from 'components/commons/form/InputPassword';
import { Flex } from 'components/commons/layout/Flex';
import { Stack } from 'components/commons/layout/Stack';
import { Text } from 'components/commons/typography/Text';
import { Title } from 'components/commons/typography/Title';
import { PublicsLayout } from 'layouts/Public';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from 'services/AuthService';
import { AuthDTO, authSchema } from 'types/auth';
import { LockIcon, PhoneIcon } from '@chakra-ui/icons';
import { FieldType, FormBuilder, FormData } from 'components/others/forms/FormBuilder';
import { formatPhoneNumber } from 'utils/masks';

export function LoginTemplate() {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: AuthDTO) => {
    console.log(data);

    try {
      const response = await login(data).unwrap();

      navigate('/home');

      console.log(response);
    } catch (error) {
      console.log(error);
    }

    
  };
  
  const formData: FormData = {
    title: 'Web Paiol - Login',
    description: 'Preencha os campos abaixo com seus dados de acesso para ter acesso à plataforma.',
    content: {
      fieldset: [
        {
          name: 'phone',
          type: FieldType.Input,
          inputSettings: {
            label: 'Telefone',
            iconLeft: <PhoneIcon color='gray.300' />,
            mask: formatPhoneNumber,
            placeholder: '(00) 00000-0000',
          },
          fieldSettings: {
            isRequired: true,
          },
        },
        {
          name: 'password',
          type: FieldType.Password,
          inputSettings: {
            label: 'Senha',
            iconLeft: <LockIcon color='gray.300' />
          },
          fieldSettings: {
            isRequired: true,
          },
        },
      ],
      submit: {
        label: 'Entrar',
        // disableWhenInvalid: false,
      },
      schemaValidation: authSchema,
    },
  }

  return (
    <PublicsLayout>
      <Flex direction="column" justify="space-between" w="100%">
        <FormBuilder formData={formData} onSubmit={onSubmit}/>
        <Flex mt="12" gap="3" justify="center">
          <Text>
            Não possui uma conta?
          </Text>
          <Text cursor="pointer" fontWeight="bold" color="brand.100" onClick={() => navigate('/register')}>
            Cadastrar
          </Text>
        </Flex>
      </Flex>
    </PublicsLayout>
  );
}
