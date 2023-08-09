import { Props as TextProps } from 'components';
import { classify } from 'helpers';
import { useTextAlign, useTextAlpha, useTextColor, useTextTransform, useTextWeight } from 'hooks';

interface Props extends TextProps {
  spaceY?: 'sm' | 'base';
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
  className,
  children,
}: Props) => {
  let _spaceY = '';

  switch (spaceY) {
    case 'sm':
      _spaceY = 'gap-y-3 lg:gap-y-4';
      break;

    case 'base':
      _spaceY = 'gap-y-4 lg:gap-y-6';
      break;
  }

  let _size = '';

  switch (size) {
    case 'xs':
      _size = 'text-xs';
      break;

    case 'sm':
      _size = 'text-xs lg:text-sm';
      break;

    case 'base':
      _size = 'text-sm lg:text-base';
      break;

    case 'md':
      _size = 'lg:text-lg';
      break;

    case 'lg':
      _size = 'text-lg lg:text-xl';
      break;

    case 'xl':
      _size = 'text-xl lg:text-2xl';
      break;
  }

  const _className = classify([
    'flex flex-col prose',
    _spaceY,
    _size,
    useTextColor(color),
    useTextWeight(weight),
    useTextAlign(align),
    useTextAlpha(alpha),
    useTextTransform(transform),
    className,
  ]);

  if (!Boolean(children?.trim())) {
    return null;
  }

  return <div className={_className} dangerouslySetInnerHTML={{ __html: children.trim() }} />;
};
