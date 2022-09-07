import { Tabs } from 'components/commons/disclosure/Tabs';
import { Text } from 'components/commons/typography/Text';
import { RegisterUser } from 'components/others/forms/RegisterUser';
import { Dispatch, SetStateAction } from 'react';
import { FieldValues } from 'react-hook-form';
import { StepsOptions } from '.';

type Props = {
  setStep: Dispatch<SetStateAction<StepsOptions>>
}

const USERS_TYPE = {
  owner: {
    name: 'businessName',
    tabLabel: 'Proprietário',
    inputLabel: 'Nome da banca',
    description:
      'Identifique o nome da sua banca para iniciar o registro em nossa plataforma.',
  },
  employee: {
    name: 'employeeCode',
    tabLabel: 'Funcionário',
    inputLabel: 'Código do funcionário',
    description:
      'Insira abaixo o código gerado pelo proprietário da banca onde você trabalha.',
  },
};

export function FirstStep({ setStep }: Props) {
  const usersType = Object.entries(USERS_TYPE);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setStep(StepsOptions.AccessData);
  };

  return (
    <>
      <Text mb="3" textAlign="center">
        Você é
      </Text>
      <Tabs
        tabsName={usersType.map(([_, value]) => value.tabLabel)}
        tabsPanel={usersType.map(([key, props]) => (
          <RegisterUser
            key={key}
            onSubmit={onSubmit}
            {...props}
          />
        ))}
        isFitted
        variant="soft-rounded"
      />
    </>
  );
}
