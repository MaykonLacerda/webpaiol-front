import { Flex as $Flex, FlexProps as $FlexProps } from '@chakra-ui/react';

type Props = $FlexProps;

export function Flex({ children, ...props }: Props) {
  return <$Flex {...props}>{children}</$Flex>;
}
