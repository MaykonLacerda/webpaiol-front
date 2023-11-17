import { Heading as $Heading, HeadingProps as $HeadingProps } from '@chakra-ui/react';

export type HeadingProps = $HeadingProps;

export function Heading({ children, ...props }: HeadingProps) {
  return <$Heading {...props}>{children}</$Heading>;
}
