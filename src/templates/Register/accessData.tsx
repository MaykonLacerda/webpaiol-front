import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';
import { Button } from 'components/commons/form/Button';
import { Input } from 'components/commons/form/Input';
import { Text } from 'components/commons/typography/Text';
import { InputPassword } from 'components/commons/form/InputPassword';
import { useToast } from 'hooks/useToast';

export function AccessData() {
  const { handleSubmit, register } = useForm();
  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    console.log(data);

    toast({
      title: 'Cadastro realizado com sucesso.',
      status: 'success',
    });
    navigate('/login');
  };

  return (
    <>
      <Text mb="1" mx="auto" textAlign="center" w="100%">
        Preencha os campos abaixo para cadastrar seu usuário na plataforma.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="5" mt="8">
          <Input name="fullName" label="Nome completo" register={register} isRequired />
          <Input name="email" label="E-mail" register={register} isRequired />
          <InputPassword name="password" label="Senha" register={register} isRequired />
          <InputPassword name="confirmPassword" label="Confirmar senha" register={register} isRequired />
          <Button type="submit" w="full" colorScheme="orange">
            Cadastrar
          </Button>
        </Stack>
      </form>
    </>
  );
}
