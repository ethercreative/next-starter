import { classify } from 'helpers/classify';
import { TextAlign, useTextAlign } from 'hooks/useTextAlign';
import { TextAlpha, useTextAlpha } from 'hooks/useTextAlpha';
import { useTextColor } from 'hooks/useTextColor';
import { TextTransform, useTextTransform } from 'hooks/useTextTransform';
import { TextWeight, useTextWeight } from 'hooks/useTextWeight';
import { TextWrap, useTextWrap } from 'hooks/useTextWrap';

const variants = {
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
  },
};

interface Props extends React.ComponentProps<'p'> {
  size?: keyof typeof variants.size;
  color?: Color;
  weight?: TextWeight;
  align?: TextAlign;
  alpha?: TextAlpha;
  transform?: TextTransform;
  wrap?: TextWrap;
}

export const Text = ({
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
    '-my-1',
    variants.size[size],
    useTextColor(color),
    useTextWeight(weight),
    useTextAlign(align),
    useTextAlpha(alpha),
    useTextTransform(transform),
    useTextWrap(wrap),
    className,
  ]);

  return (
    <p className={_className} {...props}>
      {children}
    </p>
  );
};
