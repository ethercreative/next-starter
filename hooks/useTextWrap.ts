export type TextWrap = 'balance' | 'normal';

const wraps: { [key in TextWrap]: string } = {
  balance: 'balance',
  normal: undefined,
};

export const useTextWrap = (wrap: TextWrap) => wraps[wrap];
