import * as React from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  as?: string;
  scroll?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Anchor: React.FC<Props> = ({
  href = '',
  as = '',
  scroll = true,
  className = '',
  style = {},
  children = null,
}) => (
  <Link href={href} as={as} scroll={scroll}>
    <a className={className} style={style}>
      {children}
    </a>
  </Link>
);

export default Anchor;
