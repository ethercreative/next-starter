const colors: { [key in Color]: string } = {
  transparent: 'bg-transparent',
  white: 'bg-white',
  black: 'bg-black',
};

export const useBackgroundColor = (color: Color) => colors[color];
