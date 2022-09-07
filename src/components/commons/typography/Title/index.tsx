import { Heading, Props as HeadingProps } from '../Heading';

enum TitleVariants {
  Primary = 'primary',
}

type LiteralProps = {
  [key in TitleVariants]: {
    [x: string]: string;
  };
};

export type Props = Omit<HeadingProps, 'variant'> & {
  variant?: TitleVariants;
};

export function Title({
  children,
  variant = TitleVariants.Primary,
  ...props
}: Props) {
  const literalProps: LiteralProps = {
    primary: {
      color: 'orange.500',
      size: 'md',
      mx: 'auto',
    },
  };

  return (
    <Heading {...literalProps[variant]} {...props}>
      {children}
    </Heading>
  );
}
