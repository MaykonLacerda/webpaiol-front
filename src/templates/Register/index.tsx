import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Box, FormBuilder, LoginFooter, Tabs, Text,
} from 'components';
import { UserTypeEnum } from 'types/user';
import { formData } from './formData';

export function RegisterTemplate() {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const formFieldset = Object.entries(formData);

  const onSubmit = (data: FieldValues) => {
    const userType = formFieldset[tabIndex][0] as UserTypeEnum;

    const state = {
      ...data,
      userType,
    };

    navigate('credentials', { state });
  };

  return (
    <Box w="100%">
      <Text mb="3" textAlign="center">
        Você é
      </Text>
      <Tabs
        onChange={(index) => setTabIndex(index)}
        tabsName={formFieldset.map(([_, value]) => value.tabLabel)}
        tabsPanel={formFieldset.map(([key, props]) => (
          <>
            <FormBuilder key={key} onSubmit={onSubmit} {...props} />
            {tabIndex === 0 ? (
              <>
                <Text fontSize="sm" mt="5" textAlign="center">
                  Ou
                </Text>
                <Text
                  onClick={() => navigate('credentials', { state: { userType: UserTypeEnum.EMPLOYEE } })}
                  mt="3"
                  fontSize="sm"
                  textAlign="center"
                  color="brand.700"
                  fontWeight={600}
                  cursor="pointer"
                  decoration="underline"
                >
                  Se cadastrar sem o código
                </Text>
              </>
            ) : null}
            <LoginFooter />
          </>
        ))}
        isFitted
        variant="soft-rounded"
      />
    </Box>
  );
}
