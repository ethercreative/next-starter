export type TextAlpha = 'opaque' | 'faded';

const opacities: { [key in TextAlpha]: string } = {
  faded: 'opacity-60',
  opaque: undefined,
};

export const useTextAlpha = (alpha: TextAlpha) => opacities[alpha];
