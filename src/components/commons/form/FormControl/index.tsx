import { FormControl as $FormControl, FormControlProps as $FormControlProps } from '@chakra-ui/react';

type Props = $FormControlProps;

export function FormControl({ children, ...props }: Props) {
  return <$FormControl {...props}>{children}</$FormControl>;
}
