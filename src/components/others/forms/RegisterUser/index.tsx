import { useForm, FieldValues } from 'react-hook-form';
import { Button } from 'components/commons/form/Button';
import { Input } from 'components/commons/form/Input';
import { Text } from 'components/commons/typography/Text';

export type Props = {
  name: string;
  description: string;
  inputLabel: string;
  isValid?: boolean;
  onSubmit: (data: FieldValues) => void;
}

export function RegisterUser({
  description, inputLabel, name, isValid = true, onSubmit,
}: Props) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text mb="6" mx="auto" textAlign="center" w="100%">
        {description}
      </Text>
      <Input isRequired name={name} register={register} label={inputLabel} />
      <Button type="submit" disabled={!isValid} mt="4" w="full" colorScheme="orange">
        Próximo
      </Button>
    </form>
  );
}
