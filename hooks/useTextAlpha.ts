export type TextAlpha = 'opaque' | 'faded';

export const useTextAlpha = (alpha: TextAlpha) => {
  let _alpha = '';

  switch (alpha) {
    case 'faded':
      _alpha = 'opacity-50';
      break;
  }

  return _alpha;
};
