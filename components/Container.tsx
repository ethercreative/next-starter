import { classify } from 'helpers';

interface Props extends React.PropsWithChildren {
  grow?: boolean;
  padding?: 'dynamic' | 'fixed';
}

export const Container = ({ grow, padding = 'dynamic', children }: Props) => {
  let _grow = '';

  if (grow) {
    _grow = 'h-full grow';
  }

  let _padding = '';

  switch (padding) {
    case 'dynamic':
      _padding = 'px-6 md:px-10';
      break;

    case 'fixed':
      _padding = 'px-6';
      break;
  }

  const _className = classify(['2xl:container relative isolate mx-auto w-full', _grow, _padding]);
  return <div className={_className}>{children}</div>;
};
