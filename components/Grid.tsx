import { classify } from 'helpers';

interface Props extends React.PropsWithChildren {
  gap?: 'sm' | 'base';
  grow?: boolean;
}

export const Grid = ({ gap = 'base', grow, children }: Props) => {
  let _gap = '';

  switch (gap) {
    case 'sm':
      _gap = 'gap-2 lg:gap-4';
      break;

    case 'base':
      _gap = 'gap-4 lg:gap-6';
      break;
  }

  let _grow = '';

  if (grow) {
    _grow = 'h-full grow';
  }

  const _className = classify(['grid grid-cols-12', _gap, _grow]);
  return <div className={_className}>{children}</div>;
};
