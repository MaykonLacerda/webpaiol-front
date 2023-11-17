import { useToast as $useToast } from '@chakra-ui/react';

export function useToast() {
  return $useToast({
    position: 'top',
    duration: 5000,
    isClosable: true,
  });
}
