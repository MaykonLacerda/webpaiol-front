import { Text as $Text, TextProps as $TextProps } from '@chakra-ui/react';

export type Props = $TextProps;

export function Text({ children, ...props }: Props) {
  return <$Text color="text.200" {...props}>{children}</$Text>;
}
