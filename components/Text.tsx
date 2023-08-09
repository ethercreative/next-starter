import { classify } from 'helpers';
import {
  TextAlign,
  TextAlpha,
  TextTransform,
  TextWeight,
  useTextAlign,
  useTextAlpha,
  useTextColor,
  useTextTransform,
  useTextWeight,
} from 'hooks';

export interface Props extends React.HTMLAttributes<HTMLParagraphElement>, React.PropsWithChildren {
  size?: Size;
  color?: Color;
  weight?: TextWeight;
  align?: TextAlign;
  alpha?: TextAlpha;
  transform?: TextTransform;
}

export const Text = ({
  size = 'base',
  color,
  weight,
  align,
  alpha,
  transform,
  className,
  children,
  ...props
}: Props) => {
  let _size = '';

  switch (size) {
    case 'xs':
      _size = 'text-xs';
      break;

    case 'sm':
      _size = 'text-sm';
      break;

    case 'base':
      _size = 'text-base';
      break;

    case 'md':
      _size = 'text-lg';
      break;

    case 'lg':
      _size = 'text-xl';
      break;

    case 'xl':
      _size = 'text-2xl';
      break;
  }

  const _className = classify([
    '-my-1',
    _size,
    useTextColor(color),
    useTextWeight(weight),
    useTextAlign(align),
    useTextAlpha(alpha),
    useTextTransform(transform),
    className,
  ]);

  return (
    <p className={_className} {...props}>
      {children}
    </p>
  );
};
