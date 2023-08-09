import { classify } from 'helpers';
import * as React from 'react';

type Span = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

interface Props extends React.PropsWithChildren {
  span?: Span;
  start?: Span | '13';
  className?: string;
}

// md:col-span-1 md:col-span-2 md:col-span-3 md:col-span-4 md:col-span-5 md:col-span-6 md:col-span-7 md:col-span-8 md:col-span-9 md:col-span-10 md:col-span-11 md:col-span-12
// md:col-start-1 md:col-start-2 md:col-start-3 md:col-start-4 md:col-start-5 md:col-start-6 md:col-start-7 md:col-start-8 md:col-start-9 md:col-start-10 md:col-start-11 md:col-start-12 md:col-start-13

export const Column = ({ span, start, className, children }: Props) => {
  const _span = span ? `col-span-12 md:col-span-${span}` : null;
  const _start = start ? `md:col-start-${start}` : null;
  const _className = classify([_span, _start, className]);

  return <div className={_className}>{children}</div>;
};
