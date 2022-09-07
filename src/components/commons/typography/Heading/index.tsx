import { Heading as $Heading, HeadingProps as $HeadingProps } from '@chakra-ui/react';

export type Props = $HeadingProps;

export function Heading({ children, ...props }: Props) {
  return <$Heading {...props}>{children}</$Heading>;
}
