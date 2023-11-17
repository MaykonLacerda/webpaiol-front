import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box, Flex, FormBuilder, LoginFooter, Title,
} from 'components';
import { useToast } from 'hooks/useToast';
import { useCreateMutation } from 'services/UserService';
import { CreateUserDTO, CreateUserForm, UserTypeEnum } from 'types/user';
import { handleApiErrors } from 'utils/handleApiErrors';
import { formData } from './formData';

type StateType = {
  userType: UserTypeEnum;
  shedName?: string;
  shedCode?: string;
}

export function CredentialsTemplate() {
  const state = useLocation().state as StateType;
  const [createUser] = useCreateMutation();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (!state?.userType) {
      toast.call(null, {
        title: 'Erro',
        description: 'Não foi possível identificar o tipo de usuário.',
        status: 'error',
      });

      navigate('/register');
    }
  }, [state]);

  const onSubmit = async (data: CreateUserForm) => {
    try {
      const { confirmPassword, ...restData } = data;
      const body: CreateUserDTO = {
        ...restData,
        roles: [state.userType],
        shedName: state?.shedName,
        shedCode: state?.shedCode,
      };

      console.log({ body });
      const response = await createUser(body).unwrap();

      console.log({ response });
    } catch (err) {
      const error = handleApiErrors(err);

      toast.call(null, {
        title: 'Erro ao criar usuário',
        description: error.message,
        status: 'error',
      });
    }
  };

  return (
    <Flex direction="column" align="center" justify="space-between" w="full">
      <Box>
        <Title mb="4">
          Dados de acesso
        </Title>
      </Box>
      <Box w="full">
        <FormBuilder onSubmit={onSubmit} formData={formData} footter={<LoginFooter />} />
      </Box>
    </Flex>
  );
}
