import { Heading, HeadingProps } from '../Heading';

enum TitleVariants {
  Primary = 'primary',
}

type LiteralProps = {
  [key in TitleVariants]: {
    [x: string]: string;
  };
};

export type TitleProps = Omit<HeadingProps, 'variant'> & {
  variant?: TitleVariants;
};

export function Title({
  children,
  variant = TitleVariants.Primary,
  ...props
}: TitleProps) {
  const literalProps: LiteralProps = {
    primary: {
      color: 'text.100',
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
