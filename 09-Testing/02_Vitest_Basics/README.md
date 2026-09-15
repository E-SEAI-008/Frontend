# Test Demo

Simple starting point to illustrate the benefits of testing

# Quick reference

```
describe('name', () => { ... })   → group related tests
test('name', () => { ... })       → single test case
it('name', () => { ... })         → alias for test
expect(value)                     → start an assertion
beforeEach(() => { ... })         → runs before every test in the group

Matchers:
  .toBe(x)           → strict equality (===)
  .toEqual(x)        → deep equality (objects/arrays)
  .toBeCloseTo(x)    → floating-point numbers
  .toBeTruthy()      → truthy value
  .toBeFalsy()       → falsy value
  .toContain(x)      → array or string contains x
  .toHaveLength(n)   → array/string length
  .toMatch(/regex/)  → regex match
  .toBeDefined()     → not undefined
  .toThrow('msg')    → function throws an error
  .not.toBe(x)       → invert any matcher with .not
  .resolves.toBe(x)  → Promise resolves to x
  .rejects.toThrow() → Promise rejects
```

# Common matchers

```ts
// exact equality (===)
expect(add(1, 2)).toBe(3);

// deep/structural equality — for objects and arrays
expect(getUser()).toEqual({ name: 'Alice', age: 28 });

// floating-point numbers (0.1 + 0.2 !== 0.3 in JavaScript)
expect(0.1 + 0.2).toBeCloseTo(0.3);

// boolean checks
expect(isPalindrome('madam')).toBeTruthy();
expect(isPalindrome('hello')).toBeFalsy();

// array contains
expect([1, 2, 3]).toContain(2);
expect([1, 2, 3]).not.toContain(9); // .not inverts the matcher

// array length
expect([1, 2, 3]).toHaveLength(3);

// regex match
expect('Hello Berlin').toMatch(/Berlin/);
```
