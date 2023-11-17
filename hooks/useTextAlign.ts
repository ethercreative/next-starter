export type TextAlign = 'left' | 'center' | 'right';

const alignments: { [key in TextAlign]: string } = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const useTextAlign = (align: TextAlign) => alignments[align];
