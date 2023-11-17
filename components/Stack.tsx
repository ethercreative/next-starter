import { classify } from 'helpers/classify';

const variants = {
  direction: {
    row: 'flex-row',
    col: 'flex-col',
  },
  spaceX: {
    '2xs': 'gap-x-1',
    xs: 'gap-x-2',
    sm: 'gap-x-3 lg:gap-x-4',
    base: 'gap-x-4 lg:gap-x-6',
    md: 'gap-x-5 lg:gap-x-8',
    lg: 'gap-x-6 lg:gap-x-10',
    xl: 'gap-x-8 lg:gap-x-12',
  },
  spaceY: {
    '2xs': 'gap-x-1',
    xs: 'gap-y-2',
    sm: 'gap-y-3 lg:gap-y-4',
    base: 'gap-y-4 lg:gap-y-6',
    md: 'gap-y-5 lg:gap-y-8',
    lg: 'gap-y-6 lg:gap-y-10',
    xl: 'gap-y-8 lg:gap-y-12',
  },
  justify: {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  },
  items: {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
  },
  wrap: {
    wrap: 'flex-wrap',
    'wrap-reverse': 'flex-wrap-reverse',
    nowrap: 'flex-nowrap',
  },
};

interface Props extends React.PropsWithChildren {
  direction?: keyof typeof variants.direction;
  spaceX?: keyof typeof variants.spaceX;
  spaceY?: keyof typeof variants.spaceY;
  justify?: keyof typeof variants.justify;
  items?: keyof typeof variants.items;
  wrap?: keyof typeof variants.wrap;
  grow?: boolean;
}

export const Stack = ({
  direction = 'col',
  spaceX,
  spaceY,
  justify,
  items,
  wrap,
  grow,
  children,
}: Props) => {
  const _className = classify([
    'flex',
    variants.direction[direction],
    variants.spaceX[spaceX],
    variants.spaceY[spaceY],
    variants.justify[justify],
    variants.items[items],
    variants.wrap[wrap],
    grow ? 'h-full w-full grow' : undefined,
  ]);

  return <div className={_className}>{children}</div>;
};
