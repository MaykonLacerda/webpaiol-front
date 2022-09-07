import { Box } from 'components/commons/layout/Box';
import { Flex } from 'components/commons/layout/Flex';
import { Menu, MenuItem } from 'components/commons/overlay/Menu';
import { Title } from 'components/commons/typography/Title';
import { ReactNode } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleRouteRule } from 'utils/handleRouteRule';

type Props = {
  children: ReactNode;
}

export function DashboardLayout({ children }: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { routes, menu } = handleRouteRule('admin');
  const pageTitle = routes.find((menu) => menu.link === pathname);
  const menuItems: MenuItem[] = menu.map((menu) => ({
    description: menu.name,
    props: {
      key: menu.key,
      icon: menu.icon,
      onClick: () => navigate(menu.link),
    },
  }));

  return (
    <Box w="100%" bg="gray.300" minH="100%">
      <Flex direction="column">
        <Box>
          <Flex align="center" justify="center" p="1rem">
            <Menu menuIcon={<AiOutlineMenu />} items={menuItems} />
            <Title>{pageTitle?.name}</Title>
          </Flex>
        </Box>
        <Box p="1rem">
          {children}
        </Box>
      </Flex>
    </Box>
  );
}
