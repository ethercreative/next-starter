export type TextTransform = 'uppercase' | 'normal';

const transforms: { [key in TextTransform]: string } = {
  uppercase: 'uppercase',
  normal: undefined,
};

export const useTextTransform = (transform: TextTransform) => transforms[transform];
