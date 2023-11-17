import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType } from 'zod';
import {
  Box, Button, Input, InputPassword, Stack, Text, Title,
} from 'components';

export enum FieldTypeEnum {
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
  type: FieldTypeEnum;
  inputSettings: {
    placeholder?: string;
    label: string;
    iconLeft?: React.ReactNode;
    mask?: (value: string) => string;
    defaultValue?: string;
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
    schemaValidation?: ZodType<any, any, any>;
    submit: {
      label: string;
      disableWhenInvalid?: boolean;
    },
  }
}

export type FormBuilderProps = {
  onSubmit: (data: any) => void;
  formData: FormData;
  footter?: React.ReactNode;
  isSubmitting?: boolean;
}

const generateField = (type: FieldTypeEnum, name: string, control: any, inputSettings: FormFieldset['inputSettings'], fieldSettings: FormFieldset['fieldSettings'], error?: string) => {
  const literalField: { [key in FieldTypeEnum]: React.ReactNode } = {
    [FieldTypeEnum.Input]: <Input error={error} isRequired={fieldSettings?.isRequired} name={name} control={control} {...inputSettings} />,
    [FieldTypeEnum.Password]: <InputPassword error={error} isRequired={fieldSettings?.isRequired} name={name} control={control} label={inputSettings.label} placeholder={inputSettings?.placeholder} type="password" iconLeft={inputSettings?.iconLeft} />,
  };

  return literalField[type];
};

export function FormBuilder({
  onSubmit, formData, footter, isSubmitting,
}: FormBuilderProps) {
  const { control, handleSubmit, formState: { isValid, errors } } = useForm({
    resolver: formData.content?.schemaValidation ? zodResolver(formData.content?.schemaValidation) : undefined,
    mode: 'onChange',
    defaultValues: formData.content?.fieldset.reduce((acc, field) => {
      acc[field.name] = field.inputSettings.defaultValue ?? '';
      return acc;
    }, {} as any),
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
          <Title textAlign="center" mb="4">
            {formData?.title}
          </Title>
        </Box>
      ) : null}
      {formData?.description ? (
        <Text mx="auto" textAlign="center" w="full">
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
          <Button type="submit" disabled={disableWhenInvalid ? !isValid : undefined} mt="4" w="full" isLoading={isSubmitting}>
            {content?.submit.label}
          </Button>
        </Stack>
      </form>
      {footter ? (
        <Box w="full">
          {footter}
        </Box>
      ) : null}
    </>
  );
}
