import { PRIVATES } from 'routes/privates';

export const handleRouteRule = (rule: string) => {
  const enabled = Object.entries(PRIVATES).filter(
    ([_, value]) => (value.rules?.includes(rule)),
  );

  const enableRoutes = enabled.map(([key, value]) => ({
    key,
    icon: value?.menu?.icon,
    name: value?.title,
    link: value.path,
  }));

  const menuOptions = enableRoutes.filter((route) => !!route.icon);

  return {
    routes: enableRoutes,
    menu: menuOptions,
  };
};
