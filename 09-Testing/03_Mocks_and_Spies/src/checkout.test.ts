import { expect, test, describe } from 'vitest';
import { calculateTotal } from './checkout';

// describe groups related tests together under one name
describe('calculateTotal', () => {
  // test() defines a single test case
  test('calculates correct total for UK', () => {
    const result = calculateTotal(100, 'UK');
    // expect() creates the asseertion
    // .toBe() checks strict equality (===)
    expect(result).toBe(120); // 100  * 1.2 = 120
  });

  // TEST FOR GERMANY,
  test('calculates correct total for DE', () => {
    const result = calculateTotal(100, 'DE');
    expect(result).toBe(119);
  });

  // TEST FOR UK
  test('calculates correct total for FR', () => {
    const result = calculateTotal(100, 'FR');
    expect(result).toBe(120);
  });

  // AAA
  test('calculates correct total for UK', () => {
    // ARRANGE
    const net = 100;
    const country = 'UK';

    // ACT
    const result = calculateTotal(net, country);

    // ASSERT
    expect(result).toBe(120);
  });
});
