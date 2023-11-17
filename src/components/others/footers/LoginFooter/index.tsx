import { useLocation, useNavigate } from "react-router-dom";
import { Box, Text } from "components"

export type PathOptions = '/login' | '/register' | '/register/credentials';
export type PageContent = {
  text: string;
  action: string;
  path: string;
}

export const LoginFooter = () => {
  const navigate = useNavigate(); 
  const path = useLocation().pathname as PathOptions;

  const pageContent: { [key in PathOptions ]: PageContent } = {
    '/login': {
      text: 'Não possui uma conta?',
      action: 'Cadastrar',
      path: '/register'
    },
    '/register': {
      text: 'Já possui uma conta?',
      action: 'Fazer login',
      path: '/login'
    },
    '/register/credentials': {
      text: 'Já possui uma conta?',
      action: 'Fazer login',
      path: '/login'
    },
  }

  return (
    <Box>
      <Text mt="10" textAlign="center">
        {pageContent[`${path}`].text}
        <Text as="a" ml="2" cursor="pointer" fontWeight="bold" color="brand.100" onClick={() => navigate(pageContent[`${path}`].path)}>
          {pageContent[`${path}`].action}
        </Text>
      </Text>
    </Box>
  )
}