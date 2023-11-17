import {
  Tabs as $Tabs,
  TabsProps as $TabsProps,
  TabList as $TabList,
  TabProps as $TabProps,
  TabPanels as $TabPanels,
  TabPanel as $TabPanel,
  Tab as $Tab,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

export type TabProps = Omit<$TabsProps, 'children'> & {
  tabsName: string[];
  tabsNameProps?: $TabProps;
  tabsPanel: ReactNode[];
}

export function Tabs({
  tabsName, tabsNameProps, tabsPanel, ...props
}: TabProps) {
  return (
    <$Tabs {...props}>
      <$TabList mb="1em">
        {tabsName.map((name) => <$Tab {...tabsNameProps}>{name}</$Tab>)}
      </$TabList>
      <$TabPanels>
        {tabsPanel.map((element) => <$TabPanel p="0">{element}</$TabPanel>)}
      </$TabPanels>
    </$Tabs>
  );
}
