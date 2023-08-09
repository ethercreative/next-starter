export type TextTransform = 'uppercase';

export const useTextTransform = (transform: TextTransform) => {
  let _transform = '';

  switch (transform) {
    case 'uppercase':
      _transform = 'uppercase';
      break;
  }

  return _transform;
};
