import { Tabs } from 'components/commons/disclosure/Tabs';
import { Text } from 'components/commons/typography/Text';
import { Dispatch, SetStateAction } from 'react';
import { FieldValues } from 'react-hook-form';
import { StepsOptions } from '.';
import { FieldType, FormBuilder } from 'components/others/forms/FormBuilder';
import { Hash as HashIcon } from 'tabler-icons-react';

type Props = {
  setStep: Dispatch<SetStateAction<StepsOptions>>
}

const FORM_FIEDSET = {
  employee: {
    tabLabel: 'Funcionário',
    formData: {
      description: 'Insira abaixo o código da banca.',
      content: {
        fieldset: [
          {
            name: 'shedCode',
            type: FieldType.Input,
            inputSettings: {
              label: 'Código da banca',
              iconLeft: <HashIcon size={20} strokeWidth={2} color={'#C5CEE0'} />,
            },
            fieldSettings: {
              isRequired: true,
            },
          },
        ],
        submit: {
          label: 'Próximo',
        },  
      },
    }
  },
  owner: {
    tabLabel: 'Proprietário',
    formData: {
      description: 'Identifique o nome da sua banca para iniciar o registro em nossa plataforma.',
      content: {
        fieldset: [
          {
            name: 'shedName',
            type: FieldType.Input,
            inputSettings: {
              label: 'Nome da banca',
            },
            fieldSettings: {
              isRequired: true,
            },
          },
        ],
        submit: {
          label: 'Próximo',
        },  
      },
    }
  },
};

export function FirstStep({ setStep }: Props) {
  const formFieldset = Object.entries(FORM_FIEDSET);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setStep(StepsOptions.Credentials);
  };

  return (
    <>
      <Text mb="3" textAlign="center">
        Você é
      </Text>
      <Tabs
        tabsName={formFieldset.map(([_, value]) => value.tabLabel)}
        tabsPanel={formFieldset.map(([key, props]) => (
          <FormBuilder
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
