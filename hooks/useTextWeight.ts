export type TextWeight = '';

const weights = {};

export const useTextWeight = (weight: TextWeight) => weights[weight];
