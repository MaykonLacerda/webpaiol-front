import { Hash as HashIcon } from 'tabler-icons-react';
import { FieldTypeEnum } from 'components';
import { UserTypeEnum } from 'types/user';

export const formData = {
  [UserTypeEnum.EMPLOYEE]: {
    tabLabel: 'Funcionário',
    formData: {
      description: 'Insira abaixo o código do estabelecimento.',
      content: {
        fieldset: [
          {
            name: 'shedCode',
            type: FieldTypeEnum.Input,
            inputSettings: {
              label: 'Código do estabelecimento',
              iconLeft: <HashIcon size={20} strokeWidth={2} color="#C5CEE0" />,
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
    },
  },
  [UserTypeEnum.OWNER]: {
    tabLabel: 'Proprietário',
    formData: {
      description: 'Identifique o nome do estabelecimento para iniciar o registro em nossa plataforma.',
      content: {
        fieldset: [
          {
            name: 'shedName',
            type: FieldTypeEnum.Input,
            inputSettings: {
              label: 'Nome do estabelecimento',
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
    },
  },
};
