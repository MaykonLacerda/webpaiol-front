import { Button as $Button, ButtonProps as $ButtonProps } from '@chakra-ui/react';

export type ButtonProps = $ButtonProps;

export function Button({ children, ...props }: ButtonProps) {
  return <$Button colorScheme='blue' {...props}>{children}</$Button>;
}
