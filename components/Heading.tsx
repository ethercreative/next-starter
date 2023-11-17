import { classify } from 'helpers/classify';
import { TextAlign, useTextAlign } from 'hooks/useTextAlign';
import { TextAlpha, useTextAlpha } from 'hooks/useTextAlpha';
import { useTextColor } from 'hooks/useTextColor';
import { TextTransform, useTextTransform } from 'hooks/useTextTransform';
import { TextWeight, useTextWeight } from 'hooks/useTextWeight';
import { TextWrap, useTextWrap } from 'hooks/useTextWrap';

const variants = {
  size: {
    xs: 'md:text-lg lg:text-xl -my-1',
    sm: 'text-lg md:text-xl lg:text-2xl -my-1',
    base: 'text-xl md:text-2xl lg:text-3xl -my-1',
    md: 'text-2xl md:text-3xl lg:text-4xl -my-1',
    lg: 'text-3xl md:text-4xl lg:text-5xl -my-2',
    xl: 'text-4xl md:text-5xl lg:text-6xl -my-2',
  },
};

interface Props extends React.ComponentProps<'h1'> {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: keyof typeof variants.size;
  color?: Color;
  weight?: TextWeight;
  align?: TextAlign;
  alpha?: TextAlpha;
  transform?: TextTransform;
  wrap?: TextWrap;
}

export const Heading = ({
  level: Level = 'h1',
  size = 'base',
  color,
  weight,
  align,
  alpha,
  transform,
  wrap = 'balance',
  className,
  children,
  ...props
}: Props) => {
  const _className = classify([
    '!leading-[1.125]',
    variants.size[size],
    useTextColor(color),
    useTextWeight(weight),
    useTextAlign(align),
    useTextAlpha(alpha),
    useTextTransform(transform),
    useTextWrap(wrap),
    className,
  ]);

  const isString = typeof children === 'string';

  if (isString) {
    return (
      <Level className={_className} {...props} dangerouslySetInnerHTML={{ __html: children }} />
    );
  }

  return (
    <Level className={_className} {...props}>
      {children}
    </Level>
  );
};
