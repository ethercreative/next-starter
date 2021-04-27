import * as React from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  scroll?: boolean;
  replace?: boolean;
  prefetch?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Anchor: React.FC<Props> = ({
  href = '',
  scroll = true,
  replace,
  prefetch,
  className = '',
  style = {},
  children = null,
}) => (
  <Link href={href} scroll={scroll} replace={replace} prefetch={prefetch}>
    <a className={className} style={style}>
      {children}
    </a>
  </Link>
);

export default Anchor;
