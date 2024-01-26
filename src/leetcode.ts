const dictionary = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToIntBasic(s: string): number {
  let count = 0;
  const subtractionRules = {
    'I': ['V', 'X'],
    'X': ['L', 'C'],
    'C': ['D', 'M'],
  };
  const subtractableChars = Object.keys(subtractionRules);

  for (let i = 0; i < s.length; i++) {
    const currentChar = s.charAt(i);

    if (subtractableChars.includes(currentChar)) {
      const nextChar = s.charAt(i + 1);
      const allowedRootSymbols = subtractionRules[currentChar] || [];

      if (allowedRootSymbols.includes(nextChar)) {
        count += (dictionary[nextChar] - dictionary[currentChar]);
        i++;
      } else {
        count += dictionary[currentChar];
      }
    } else {
      count += dictionary[currentChar];
    }
  }

  return count;
}

function romanToIntSmart(s: string): number {
  const numbers = s.split('').map(char => dictionary[char]);
  return numbers.reduce((prev, cur, i) => cur < numbers[i + 1] ? prev - cur : prev + cur, 0);
}

export const romanToInt = romanToIntSmart;

/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

export function strStr(haystack: string, needle: string): number {
  // Using String methods
  // return haystack.indexOf(needle);

  // Using custom implementation
  if (haystack.length < needle.length) {
    return -1;
  }

  for (let i = 0; i < haystack.length - (needle.length + 1); i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }

  return -1;
}

export const strPermutation = (str: string): string[] => {
  if (str.length === 0) return [];
  if (str.length === 1) return [str];
  if (str.length === 2) return [str, `${str.charAt(1)}${str.charAt(0)}`];

  return str.split('').reduce((acc, char, index) => {
    const permutationsWithoutRoot = strPermutation(str.slice(0, index) + str.slice(index + 1));
    const permutationsRest = permutationsWithoutRoot.map(perm => `${char}${perm}`);

    return [...acc, ...permutationsRest];
  }, []);
};
