import { romanToInt } from './roman2integer';

describe('romanToInt', () => {
  describe('Check types', () => {
    test('returns integer', () => {
      expect(typeof romanToInt('I')).toBe('number');
    });
  });

  describe('Convert roman numerals to integers', () => {
    const cases = [
      ['III', 3],
      ['LVIII', 58],
      ['MCMXCIV', 1994],
    ];


    test.each(cases)(`converts %p to %p`, (input: any, output) => {
      expect(romanToInt(String(input))).toBe(output);
    });
  });
});
