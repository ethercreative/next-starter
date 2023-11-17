import { Text } from 'components/Text';
import { classify } from 'helpers/classify';
import { useTextAlign } from 'hooks/useTextAlign';
import { useTextAlpha } from 'hooks/useTextAlpha';
import { useTextColor } from 'hooks/useTextColor';
import { useTextTransform } from 'hooks/useTextTransform';
import { useTextWeight } from 'hooks/useTextWeight';
import { useTextWrap } from 'hooks/useTextWrap';

const variants = {
  spaceY: {
    sm: 'gap-y-3 lg:gap-y-4',
    base: 'gap-y-4 lg:gap-y-6',
  },
  size: {
    xs: 'text-xs',
    sm: 'text-xs lg:text-sm',
    base: 'text-sm lg:text-base',
    md: 'lg:text-lg',
    lg: 'text-lg lg:text-xl',
    xl: 'text-xl lg:text-2xl',
  },
};

interface Props extends React.ComponentProps<typeof Text> {
  spaceY?: keyof typeof variants.spaceY;
  children: string;
}

export const Prose = ({
  spaceY = 'base',
  size = 'base',
  color,
  weight,
  align,
  alpha,
  transform,
  wrap = 'balance',
  className,
  children,
}: Props) => {
  const _className = classify([
    'flex flex-col prose',
    variants.spaceY[spaceY],
    variants.size[size],
    useTextColor(color),
    useTextWeight(weight),
    useTextAlign(align),
    useTextAlpha(alpha),
    useTextTransform(transform),
    useTextWrap(wrap),
    className,
  ]);

  let content = children?.trim();

  if (!content) {
    return null;
  }

  if (!content.includes('<p>')) {
    content = `<p>${content}</p>`;
  }

  return <div className={_className} dangerouslySetInnerHTML={{ __html: content }} />;
};
