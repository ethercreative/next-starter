export type TextAlign = 'left' | 'center' | 'right';

export const useTextAlign = (align: TextAlign) => {
  let _align = '';

  switch (align) {
    case 'left':
      _align = 'text-left';
      break;

    case 'center':
      _align = 'text-center';
      break;

    case 'right':
      _align = 'text-right';
      break;
  }

  return _align;
};
