import { Heading, Text, Flex } from '@chakra-ui/react';
import { Box } from 'components/commons/layout/Box';
import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccessData } from './accessData';
import { FirstStep } from './firstStep';

export enum StepsOptions {
  First = 'first',
  AccessData = 'accessData',
}

export function RegisterTemplate() {
  const [step, setStep] = useState<StepsOptions>(StepsOptions.First);
  const navigate = useNavigate();

  const literalSteps: { [key in StepsOptions]: ReactNode } = {
    first: <FirstStep setStep={setStep} />,
    accessData: <AccessData />,
  };

  const literalTitles: { [key in StepsOptions]: string } = {
    first: 'Cadastre-se no Web Paiol',
    accessData: 'Dados de acesso',
  };

  return (
    <Flex direction="column" align="center" justify="space-between" w="100%">
      <Box>
        <Heading color="orange.500" size="md" mx="auto" mb="8">
          {literalTitles[step]}
        </Heading>
      </Box>
      <Box w="100%">
        {literalSteps[step]}
      </Box>
      <Box>
        <Flex mt="12" gap="3">
          <Text mx="auto">
            Já possui uma conta?
          </Text>
          <Text cursor="pointer" mx="auto" fontWeight="bold" color="orange.500" onClick={() => navigate('/login')}>
            Faça login
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
