import { FormControl as $FormControl, FormControlProps as $FormControlProps } from '@chakra-ui/react';

export type FormControlProps = $FormControlProps;

export function FormControl({ children, ...props }: FormControlProps) {
  return <$FormControl {...props}>{children}</$FormControl>;
}
