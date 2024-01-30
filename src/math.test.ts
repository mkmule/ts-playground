import { multiply } from './math';

describe('math', () => {
  test('should return a positive number when any number multiplied by TWO negative', () => {
    expect(multiply(-3, -1)).toBe(3);
    expect(multiply(-1, -3)).toBe(3);
  });

  test('should return a negative number when any number multiplied by ONE negative', () => {
    expect(multiply(3, -1)).toBe(-3);
    expect(multiply(-1, 3)).toBe(-3);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(2, -3)).toBe(-6);
  });

  test('should return 0 when any number multiplied by 0', () => {
    expect(multiply(3, 0)).toBe(0);
    expect(multiply(0, 3)).toBe(0);
  });

  test('should return 6 when 3*2', () => {
    expect(multiply(3, 2)).toBe(6);
  });
});
