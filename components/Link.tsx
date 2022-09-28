import * as React from 'react';
import NextLink from 'next/link';

interface Props extends React.PropsWithChildren {
  href: string;
  scroll?: boolean;
  replace?: boolean;
  prefetch?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Link: React.FC<Props> = ({
  href = '',
  scroll = true,
  replace,
  prefetch,
  className,
  style = {},
  children = null,
}) => (
  <NextLink href={href} scroll={scroll} replace={replace} prefetch={prefetch}>
    <a className={className} style={style}>
      {children}
    </a>
  </NextLink>
);
