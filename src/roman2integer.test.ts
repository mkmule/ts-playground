import { romanToInt } from './roman2integer';

describe('romanToInt: Convert roman numerals to integers', () => {
  test(`converts 'III' to 3`, () => {
    // Given
    const inputRoman = 'III';
    const outputInteger = 3;

    // Then
    expect(romanToInt(inputRoman)).toBe(outputInteger);
  });
});
