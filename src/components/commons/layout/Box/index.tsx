import { Box as $Box, BoxProps as $BoxProps } from '@chakra-ui/react';

export type BoxProps = $BoxProps;

export function Box({ children, ...props }: BoxProps) {
  return <$Box {...props}>{children}</$Box>;
}
