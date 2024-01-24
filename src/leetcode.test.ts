import { romanToInt, strStr } from './leetcode';

describe('romanToInt', () => {
  describe('Return correct type', () => {
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
        ['IV', 4],
        ['XXC', 100],
        ['MCMXCIV', 1994],
      ];

      test.each(cases)(`converts %p to %p`, (input: any, output) => {
        expect(romanToInt(String(input))).toBe(output);
      });
    });
  });
});

describe('strStr', () => {
  describe('edge cases', () => {
    test('return -1 if empty string', () => {
      expect(strStr('', 'something')).toBe(-1);
    });

    test('return -1 if haystack is smaller then needle', () => {
      expect(strStr('123', '12345')).toBe(-1);
    });
  });

  describe('not empty strings', () => {
    test('return 0 for `sadbutsad` and `sad`', () => {
      expect(strStr('sadbutsad', 'sad')).toBe(0);
    });
  });
})
