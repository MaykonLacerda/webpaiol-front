import { Flex as $Flex, FlexProps as $FlexProps } from '@chakra-ui/react';

export type FlexProps = $FlexProps;

export function Flex({ children, ...props }: FlexProps) {
  return <$Flex {...props}>{children}</$Flex>;
}
