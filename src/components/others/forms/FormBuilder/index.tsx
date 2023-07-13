import { useForm, FieldValues, UseFormRegister } from 'react-hook-form';
import { Button } from 'components/commons/form/Button';
import { Input } from 'components/commons/form/Input';
import { Text } from 'components/commons/typography/Text';
import { Box } from 'components/commons/layout/Box';
import { Title } from 'components/commons/typography/Title';
import { Stack } from 'components/commons/layout/Stack';
import { Flex } from 'components/commons/layout/Flex';
import { InputPassword } from 'components/commons/form/InputPassword';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { ZodObject } from 'zod';

export enum FieldType {
  Input = 'input',
  Password = 'password',
  // Select = 'select',
  // Radio = 'radio',
  // Checkbox = 'checkbox',
  // Textarea = 'textarea',
  // Number = 'number',
  // Date = 'date',
  // File = 'file',
}

export type FormFieldset = {
  name: string;
  type: FieldType;
  inputSettings: {
    placeholder?: string;
    label: string;
    iconLeft?: React.ReactNode;
    mask?: (value: string) => string;
  },
  fieldSettings?: {
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isHidden?: boolean;
  },
}

export type FormData = {
  title?: string;
  description?: string;
  content: {
    fieldset: FormFieldset[];
    schemaValidation?: ZodObject<FieldValues>;
    submit: {
      label: string;
      disableWhenInvalid?: boolean;
    },
  }
}

export type Props = {
  onSubmit: (data: any) => void;
  formData: FormData;
  isLoading?: boolean;
  footter?: React.ReactNode;
}

const generateField = (type: FieldType, name: string, control: any, inputSettings: FormFieldset['inputSettings'], fieldSettings: FormFieldset['fieldSettings'], error?: string) => {
  const literalField: { [key in FieldType]: React.ReactNode } = {
    [FieldType.Input]: <Input error={error} isRequired={fieldSettings?.isRequired} name={name} control={control} {...inputSettings} />,
    [FieldType.Password]: <InputPassword error={error} isRequired={fieldSettings?.isRequired} name={name} control={control} label={inputSettings.label} placeholder={inputSettings?.placeholder} type="password" iconLeft={inputSettings?.iconLeft} />,
  };

  return literalField[type];
}

export function FormBuilder({
  onSubmit, formData, isLoading, footter,
}: Props) {
  const { control, handleSubmit, formState: { isValid, errors } } = useForm({
    resolver: formData.content?.schemaValidation ? zodResolver(formData.content?.schemaValidation) : undefined,
    mode: 'onChange',
  });
  const content = formData?.content;
  const disableWhenInvalid = content?.submit.disableWhenInvalid ?? true;

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      {formData?.title ? (
        <Box>
          <Title textAlign='center' mb="4">
            {formData?.title}
          </Title>
        </Box>
      ) : null}
      {formData?.description ? (
        <Text mx="auto" textAlign="center" w="100%">
          {formData?.description}
        </Text>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="5" mt="8">
          {content?.fieldset.map((field) => (
            <Box key={field.name}>
              {generateField(field.type, field.name, control, field.inputSettings, field.fieldSettings, errors[field.name]?.message as string)}
            </Box>
          ))}
          <Button type="submit" disabled={disableWhenInvalid ? !isValid : undefined} mt="4" w="full" isLoading={isLoading}>
            {content?.submit.label}
          </Button>
        </Stack>
      </form>
      {footter ? (
        <Box>
          {footter}
        </Box>
      ) : null}
    </>
  );
}
