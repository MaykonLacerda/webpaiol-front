import { Stack as $Stack, StackProps as $StackProps } from '@chakra-ui/react';

export type StackProps = $StackProps;

export function Stack({ children, ...props }: StackProps) {
  return <$Stack {...props}>{children}</$Stack>;
}
