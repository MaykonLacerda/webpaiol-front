import {
  FormErrorMessage as $FormErrorMessage,
  FormLabel as $FormLabel,
  Input as $Input,
  InputProps as $InputProps,
} from '@chakra-ui/react';
import { FieldPath, UseFormRegister, FieldValues } from 'react-hook-form';
import { Flex } from 'components/commons/layout/Flex';
import { Text } from 'components/commons/typography/Text';
import { INFO } from 'constants/messages';
import { FormControl } from '../FormControl';

export type Props = $InputProps & {
  label?: string;
  name: FieldPath<FieldValues>;
  error?: string;
  register?: UseFormRegister<FieldValues>;
};

type EnhancedInputLabelProps = {
  label?:string,
  isRequired?: boolean;
  htmlFor: string;
}

function EnhancedInputLabel({ label, isRequired, htmlFor }: EnhancedInputLabelProps) {
  return (
    <div>
      {label && (
      <Flex align="center">
        <$FormLabel htmlFor={htmlFor} fontSize="sm" mb="2" fontWeight="bold" color="blackAlpha.800">
          {label}
        </$FormLabel>
        {isRequired && (
          <Text ml="-2" color="red.500" fontSize="sm" mb="2" fontWeight="semibold">*</Text>
        )}
      </Flex>
      )}
    </div>
  );
}

export function Input({
  label,
  name,
  isRequired,
  placeholder,
  error,
  register,
  ...props
}: Props) {
  return (
    <FormControl isInvalid={!!error}>
      <EnhancedInputLabel htmlFor={name} isRequired={isRequired} label={label} />
      <$Input
        id={name}
        placeholder={placeholder || INFO.InputPlaceholder}
        isRequired={isRequired}
        {...(register?.(name))}
        {...props}
      />
      <$FormErrorMessage>
        {error}
      </$FormErrorMessage>
    </FormControl>
  );
}
