const colors: { [key in Color]: string } = {
  transparent: 'text-transparent',
  white: 'text-white',
  black: 'text-black',
};

export const useTextColor = (color: Color) => colors[color];
