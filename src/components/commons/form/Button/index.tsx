import { Button as $Button, ButtonProps as $ButtonProps } from '@chakra-ui/react';

type Props = $ButtonProps;

export function Button({ children, ...props }: Props) {
  return <$Button colorScheme='blue' {...props}>{children}</$Button>;
}
