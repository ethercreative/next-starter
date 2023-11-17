import { classify } from 'helpers/classify';

const variants = {
  padding: {
    dynamic: 'px-6 md:px-10',
    fixed: 'px-6',
  },
};

interface Props extends React.PropsWithChildren {
  padding?: keyof typeof variants.padding;
  grow?: boolean;
}

export const Container = ({ padding = 'dynamic', grow, children }: Props) => {
  const _className = classify([
    '2xl:container relative isolate mx-auto w-full',
    variants.padding[padding],
    grow ? 'h-full grow' : undefined,
  ]);

  return <div className={_className}>{children}</div>;
};
