import {
  FormErrorMessage as $FormErrorMessage,
  FormLabel as $FormLabel,
  Input as $Input,
  InputProps as $InputProps,
  InputGroup as $InputGroup,
  InputLeftElement as $InputLeftElement,
} from '@chakra-ui/react';
import { FieldPath, FieldValues, Controller, ControllerRenderProps } from 'react-hook-form';
import { Flex } from 'components/commons/layout/Flex';
import { Text } from 'components/commons/typography/Text';
import { INFO } from 'common/constants/messages';
import { FormControl } from '../FormControl';

export type InputProps = $InputProps & {
  label?: string;
  name: FieldPath<FieldValues>;
  error?: string;
  iconLeft?: React.ReactNode;
  mask?: (value: string) => string;
  control: any;
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
        <$FormLabel htmlFor={htmlFor} fontSize="sm" mb="2" fontWeight="bold" color="text.100">
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
  iconLeft,
  control,
  mask,
  ...props
}: InputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, field: ControllerRenderProps<FieldValues, string>) => {
    if (mask) {
      event.target.value = mask(event.target.value);
    }
    if (props.onChange) {
      props.onChange(event);
    }
    field.onChange(event);
  };

  return (
    <FormControl isInvalid={!!error}>
      <EnhancedInputLabel htmlFor={name} isRequired={isRequired} label={label} />
      
        <Controller 
          name={name}
          control={control}
          render={({ field }) => (
            <>
              <$InputGroup>
                {iconLeft ? (
                  <$InputLeftElement pointerEvents='none'>
                    {iconLeft}
                  </$InputLeftElement>
                ) : null}
                <$Input
                  {...field}
                  {...props}
                  id={name}
                  placeholder={placeholder || INFO.InputPlaceholder}
                  onChange={(e) => handleChange(e, field)}
                />
              </$InputGroup>
            </>
          )}
        />
      
      <$FormErrorMessage>
        {error}
      </$FormErrorMessage>
    </FormControl>
  );
}
