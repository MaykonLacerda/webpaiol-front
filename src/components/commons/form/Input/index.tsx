import { Input as $Input, InputProps as $InputProps } from '@chakra-ui/react';
import { Flex } from 'components/commons/layout/Flex';
import { Text } from 'components/commons/typography/Text';
import { INFO } from 'constants/messages';

export type Props = $InputProps & {
  label?: string;
};

export function Input({
  label, isRequired, placeholder, ...props
}: Props) {
  return (
    <>
      {label && (
        <Flex align="center">
          <Text fontSize="sm" mb="2" fontWeight="bold" color="blackAlpha.800">
            {label}
          </Text>
          {isRequired && (
            <Text ml="1" color="red.500" fontSize="sm" mb="2" fontWeight="semibold">*</Text>
          )}
        </Flex>
      )}
      <$Input
        placeholder={placeholder || INFO.InputPlaceholder}
        isRequired={isRequired}
        required={isRequired}
        {...props}
      />
    </>
  );
}
