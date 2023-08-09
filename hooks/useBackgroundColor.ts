export const useBackgroundColor = (color: Color) => {
  let _color = '';

  switch (color) {
    case 'transparent':
      _color = 'bg-transparent';
      break;

    case 'white':
      _color = 'bg-white';
      break;

    case 'black':
      _color = 'bg-black';
      break;
  }

  return _color;
};
