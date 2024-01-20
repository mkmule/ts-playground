const dictionary = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const subtractionRules = {
  'I': ['V', 'X'],
  'X': ['L', 'C'],
  'C': ['D', 'M'],
};
const subtractableChars = Object.keys(subtractionRules);

export function romanToInt(s: string): number {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const currentChar = s.charAt(i);

    if (subtractableChars.includes(currentChar)) {
      const nextChar = s.charAt(i + 1);
      const allowedRootSymbols = subtractionRules[currentChar] || [];

      if (allowedRootSymbols.includes(nextChar)) {
        console.log('allowed', dictionary[nextChar] - dictionary[currentChar]);
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
