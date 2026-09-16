import { VATRates } from './types';

export const calculateTotal = (
  net: number,
  country: keyof typeof VATRates,
): number => {
  return net * (1 + VATRates[country]);
};
