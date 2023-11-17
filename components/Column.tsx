import { classify } from 'helpers/classify';

const variants = {
  span: {
    1: 'col-span-12 md:col-span-1',
    2: 'col-span-12 md:col-span-2',
    3: 'col-span-12 md:col-span-3',
    4: 'col-span-12 md:col-span-4',
    5: 'col-span-12 md:col-span-5',
    6: 'col-span-12 md:col-span-6',
    7: 'col-span-12 md:col-span-7',
    8: 'col-span-12 md:col-span-8',
    9: 'col-span-12 md:col-span-9',
    10: 'col-span-12 md:col-span-10',
    11: 'col-span-12 md:col-span-11',
    12: 'col-span-12',
  },
  start: {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12',
    13: 'col-span-13',
  },
};

interface Props extends React.PropsWithChildren {
  span?: keyof typeof variants.span;
  start?: keyof typeof variants.start;
  className?: string;
}

export const Column = ({ span, start, className, children }: Props) => {
  const _className = classify([variants.span[span], variants.start[start], className]);
  return <div className={_className}>{children}</div>;
};
