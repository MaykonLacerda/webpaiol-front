import { Center, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

export function PublicsLayout({ children }: Props) {
  return (
    <Center h="100%" w="100%" bg="gray.300">
      <Flex shadow="md" bg="whiteAlpha.800" padding="8" borderRadius={10} h="lg" w={['xs', 'sm', 'md']}>
        {children}
      </Flex>
    </Center>
  );
}
