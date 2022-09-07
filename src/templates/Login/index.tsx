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

export function LoginTemplate() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);

    navigate('/home');
  };

  return (
    <PublicsLayout>
      <Flex direction="column" justify="space-between" w="100%">
        <Title mb="8">Web Paiol - Login</Title>
        <Text mb="1" mx="auto" textAlign="center" w="100%">
          Insira seus dados de acesso nos campos abaixo para acessar a plataforma.
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing="5" p="1rem">
            <Input register={register} label="E-mail" name="email" />
            <InputPassword register={register} label="Senha" name="password" />
            <Button type="submit" w="full" colorScheme="orange">Entrar</Button>
          </Stack>
        </form>
        <Flex mt="12" gap="3" justify="center">
          <Text>
            Não possui uma conta?
          </Text>
          <Text cursor="pointer" fontWeight="bold" color="orange.500" onClick={() => navigate('/register')}>
            Cadastrar
          </Text>
        </Flex>
      </Flex>
    </PublicsLayout>
  );
}
