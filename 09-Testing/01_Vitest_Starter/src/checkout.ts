import { VATRates } from './types';

export const calculateTotal = (net: number, country: keyof typeof VATRates): number => {
  if (country !== 'UK') {
    return net * (1 + VATRates[country]) * (1 + VATRates[country]);
  }
  return net * (1 + VATRates[country]);
};
