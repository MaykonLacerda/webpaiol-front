import { Text as $Text, TextProps as $TextProps } from '@chakra-ui/react';

export type TextProps = $TextProps;

export function Text({ children, ...props }: TextProps) {
  return <$Text color="text.200" {...props}>{children}</$Text>;
}
