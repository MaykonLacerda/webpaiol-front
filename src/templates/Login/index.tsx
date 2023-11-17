import { PublicsLayout } from 'layouts/Public';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from 'services/AuthService';
import { AuthDTO } from 'types/auth';
import { useToast } from 'hooks/useToast';
import { handleApiErrors } from 'utils/handleApiErrors';
import { Flex, FormBuilder, LoginFooter } from 'components';
import { formData } from './formData';

export function LoginTemplate() {
  const navigate = useNavigate();
  const toast = useToast();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: AuthDTO) => {
    console.log(data);

    try {
      const response = await login(data).unwrap();

      console.log({ response });

      navigate('/home');
    } catch (err) {
      const error = handleApiErrors(err);

      toast.call(null, {
        title: 'Erro ao realizar login',
        description: error.message,
        status: 'error',
      });
    }
  };

  return (
    <PublicsLayout>
      <Flex direction="column" justify="space-between" w="100%">
        <FormBuilder
          formData={formData}
          isSubmitting={isLoading}
          onSubmit={onSubmit}
          footter={<LoginFooter />}
        />
      </Flex>
    </PublicsLayout>
  );
}
