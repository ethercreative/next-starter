export const useTextColor = (color: Color) => {
  let _color = '';

  switch (color) {
    case 'transparent':
      _color = 'text-transparent';
      break;

    case 'white':
      _color = 'text-white';
      break;

    case 'black':
      _color = 'text-black';
      break;
  }

  return _color;
};
