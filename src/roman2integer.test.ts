import { romanToInt } from './roman2integer';

describe('romanToInt', () => {
  describe('Check types', () => {
    test('returns integer', () => {
      expect(typeof romanToInt('I')).toBe('number');
    });
  });

  describe('Convert roman numerals to integers', () => {
    describe('Simple cases without subtraction', () => {
      const cases = [
        ['III', 3],
        ['LVIII', 58],
      ];

      test.each(cases)(`converts %p to %p`, (input: any, output) => {
        expect(romanToInt(String(input))).toBe(output);
      });
    });

    describe('Cases with subtraction', () => {
      const cases = [
        ['MCMXCIV', 1994],
      ];

      test.each(cases)(`converts %p to %p`, (input: any, output) => {
        expect(romanToInt(String(input))).toBe(output);
      });
    });
  });
});
