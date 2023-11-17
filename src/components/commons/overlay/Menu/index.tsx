import {
  IconButton,
  Menu as $Menu,
  MenuButton as $MenuButton,
  MenuItem as $MenuItem,
  MenuItemProps as $MenuItemProps,
  MenuList as $MenuList,
  MenuProps as $MenuProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

export type MenuItem = {
  description?: string;
  props: $MenuItemProps;
}

export type MenuProps = Omit<$MenuProps, 'children'> & {
  menuIcon: ReactNode;
  items: MenuItem[];
};

export function Menu({ menuIcon, items, ...props }: MenuProps) {
  return (
    <$Menu {...props}>
      <$MenuButton
        as={IconButton}
        aria-label="Options"
        icon={menuIcon}
        variant="outline"
      />
      <$MenuList>
        {items?.map((item) => (
          <$MenuItem {...item.props}>
            {item.description}
          </$MenuItem>
        ))}
      </$MenuList>
    </$Menu>
  );
}
