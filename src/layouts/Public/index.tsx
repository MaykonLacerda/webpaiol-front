import { Center, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

export function PublicsLayout({ children }: Props) {
  return (
    <Center w="100%" bg="gray.300" minH="100%">
      <Flex
        shadow="md"
        bg="whiteAlpha.800"
        padding="8"
        my="12"
        borderRadius={10}
        w={['xs', 'sm', 'md']}
        h="fit-content"
      >
        {children}
      </Flex>
    </Center>
  );
}
