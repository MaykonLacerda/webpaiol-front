import { Box } from 'components/commons/layout/Box';
import { Flex } from 'components/commons/layout/Flex';
import { Text } from 'components/commons/typography/Text';
import { Title } from 'components/commons/typography/Title';
import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirstStep } from './firstStep';
import { FieldType, FormBuilder, FormData } from 'components/others/forms/FormBuilder';

export enum StepsOptions {
  FirstStep = 'firstStep',
  Credentials = 'credentials',
}

export function RegisterTemplate() {
  const [step, setStep] = useState<StepsOptions>(StepsOptions.FirstStep);
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
  }
  
  const formData: FormData = {
    description: 'Preencha os campos abaixo para criar sua conta',
    content: {
      fieldset: [
        {
          name: 'name',
          type: FieldType.Input,
          inputSettings: {
            label: 'Nome',
          },
          fieldSettings: {
            isRequired: true,
          },
        },
        {
          name: 'phone',
          type: FieldType.Input,
          inputSettings: {
            label: 'Número de telefone', 
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
          },
          fieldSettings: {
            isRequired: true,
          },
        },
        {
          name: 'passwordConfirmation',
          type: FieldType.Password,
          inputSettings: {
            label: 'Confirme sua senha',
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

  const literalTitles: { [key in StepsOptions]: string } = {
    firstStep: 'Cadastre-se no Web Paiol',
    credentials: 'Dados de acesso',
  };

  const literalSteps: { [key in StepsOptions]: ReactNode } = {
    firstStep: <FirstStep setStep={setStep} />,
    credentials: <FormBuilder onSubmit={onSubmit} formData={formData} />,
  };

  return (
    <Flex direction="column" align="center" justify="space-between" w="100%">
      <Box>
        <Title mb="4">
          {literalTitles[step]}
        </Title>
      </Box>
      <Box w="100%">
        {literalSteps[step]}
      </Box>
      <Box>
        <Flex mt="12" gap="3">
          <Text mx="auto">
            Já possui uma conta?
          </Text>
          <Text cursor="pointer" mx="auto" fontWeight="bold" color="brand.100" onClick={() => navigate('/login')}>
            Fazer login
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
