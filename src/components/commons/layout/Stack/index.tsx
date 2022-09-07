import { Stack as $Stack, StackProps as $StackProps } from '@chakra-ui/react';

type Props = $StackProps;

export function Stack({ children, ...props }: Props) {
  return <$Stack {...props}>{children}</$Stack>;
}
