import { Box as $Box, BoxProps as $BoxProps } from '@chakra-ui/react';

type Props = $BoxProps;

export function Box({ children, ...props }: Props) {
  return <$Box {...props}>{children}</$Box>;
}
