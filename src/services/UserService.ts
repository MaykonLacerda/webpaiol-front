import { baseApi } from 'services';
import { AuthResponse } from 'types/auth';
import { CreateUserDTO } from 'types/user';

const userService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation<AuthResponse, CreateUserDTO>({
      query: (body) => ({
        url: 'user/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCreateMutation } = userService;
