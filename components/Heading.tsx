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

interface Props extends React.HTMLAttributes<HTMLHeadingElement>, React.PropsWithChildren {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: Size | '2xl';
  color?: Color;
  weight?: TextWeight;
  align?: TextAlign;
  alpha?: TextAlpha;
  transform?: TextTransform;
}

export const Heading = ({
  level: Level = 'h1',
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
      _size = 'md:text-lg 3xl:text-xl -my-1';
      break;

    case 'sm':
      _size = 'text-lg md:text-xl 3xl:text-2xl -my-1';
      break;

    case 'base':
      _size = 'text-xl md:text-2xl 3xl:text-3xl -my-1';
      break;

    case 'md':
      _size = 'text-2xl md:text-3xl 3xl:text-4xl -my-1';
      break;

    case 'lg':
      _size = 'text-3xl md:text-4xl 3xl:text-5xl -my-2';
      break;

    case 'xl':
      _size = 'text-4xl md:text-5xl 3xl:text-6xl -my-3';
      break;

    case '2xl':
      _size = 'text-5xl md:text-6xl 3xl:text-7xl -my-3';
      break;
  }

  const _className = classify([
    '!leading-[1.125]',
    _size,
    useTextColor(color),
    useTextWeight(weight),
    useTextAlign(align),
    useTextAlpha(alpha),
    useTextTransform(transform),
    className,
  ]);

  return (
    <Level className={_className} {...props}>
      {children}
    </Level>
  );
};
