import { Box } from 'components/commons/layout/Box';
import { Flex } from 'components/commons/layout/Flex';
import { Text } from 'components/commons/typography/Text';
import { Title } from 'components/commons/typography/Title';
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
          <Text cursor="pointer" mx="auto" fontWeight="bold" color="orange.500" onClick={() => navigate('/login')}>
            Fazer login
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
