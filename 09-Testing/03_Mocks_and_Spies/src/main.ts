import { VATRates } from './types';
import { calculateTotal } from './checkout';
import './style.css';

const priceInput = document.querySelector<HTMLInputElement>('#price')!;
const countrySelect = document.querySelector<HTMLSelectElement>('#country')!;
const calculateBtn = document.querySelector<HTMLButtonElement>('#calculate')!;
const totalDisplay = document.querySelector<HTMLParagraphElement>('#total')!;

calculateBtn.addEventListener('click', () => {
  const net = parseFloat(priceInput.value);
  const country = countrySelect.value as keyof typeof VATRates;
  const total = calculateTotal(net, country);
  totalDisplay.textContent = `Total: €${total.toFixed(2)}`;
});
