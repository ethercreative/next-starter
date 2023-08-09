import { classify } from 'helpers';

interface Props extends React.PropsWithChildren {
  direction?: 'row' | 'col';
  spaceX?: Size;
  spaceY?: Size;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
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
  let _direction = '';

  switch (direction) {
    case 'row':
      _direction = 'flex-row';
      break;

    case 'col':
      _direction = 'flex-col';
      break;
  }

  let _spaceX = '';

  switch (spaceX) {
    case 'xs':
      _spaceX = 'gap-x-2';
      break;

    case 'sm':
      _spaceX = 'gap-x-3 lg:gap-x-4';
      break;

    case 'base':
      _spaceX = 'gap-x-4 lg:gap-x-6';
      break;

    case 'md':
      _spaceX = 'gap-x-5 lg:gap-x-8';
      break;

    case 'lg':
      _spaceX = 'gap-x-6 lg:gap-x-10';
      break;

    case 'xl':
      _spaceX = 'gap-x-8 lg:gap-x-12';
      break;
  }

  let _spaceY = '';

  switch (spaceY) {
    case 'xs':
      _spaceY = 'gap-y-2';
      break;

    case 'sm':
      _spaceY = 'gap-y-3 lg:gap-y-4';
      break;

    case 'base':
      _spaceY = 'gap-y-4 lg:gap-y-6';
      break;

    case 'md':
      _spaceY = 'gap-y-5 lg:gap-y-8';
      break;

    case 'lg':
      _spaceY = 'gap-y-6 lg:gap-y-10';
      break;

    case 'xl':
      _spaceY = 'gap-y-8 lg:gap-y-12';
      break;
  }

  let _justify = '';

  switch (justify) {
    case 'start':
      _justify = 'justify-start';
      break;

    case 'end':
      _justify = 'justify-end';
      break;

    case 'center':
      _justify = 'justify-center';
      break;

    case 'between':
      _justify = 'justify-between';
      break;

    case 'around':
      _justify = 'justify-around';
      break;

    case 'evenly':
      _justify = 'justify-evenly';
      break;
  }

  let _items = '';

  switch (items) {
    case 'start':
      _items = 'items-start';
      break;

    case 'end':
      _items = 'items-end';
      break;

    case 'center':
      _items = 'items-center';
      break;

    case 'baseline':
      _items = 'items-baseline';
      break;

    case 'stretch':
      _items = 'items-stretch';
      break;
  }

  let _wrap = '';

  switch (wrap) {
    case 'wrap':
      _wrap = 'flex-wrap';
      break;

    case 'wrap-reverse':
      _wrap = 'flex-wrap-reverse';
      break;

    case 'nowrap':
      _wrap = 'flex-nowrap';
      break;
  }

  let _grow = '';

  if (grow) {
    _grow = 'h-full w-full grow';
  }

  const _className = classify([
    'flex',
    _direction,
    _spaceX,
    _spaceY,
    _justify,
    _items,
    _wrap,
    _grow,
  ]);

  return <div className={_className}>{children}</div>;
};
