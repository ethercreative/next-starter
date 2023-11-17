import { classify } from 'helpers/classify';

const variants = {
  gap: {
    sm: 'gap-2 lg:gap-4',
    base: 'gap-4 lg:gap-6',
  },
};

interface Props extends React.PropsWithChildren {
  gap?: keyof typeof variants.gap;
  grow?: boolean;
}

export const Grid = ({ gap = 'base', grow, children }: Props) => {
  const _className = classify([
    'grid grid-cols-12',
    variants.gap[gap],
    grow ? 'h-full grow' : undefined,
  ]);

  return <div className={_className}>{children}</div>;
};
