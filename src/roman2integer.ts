const dictionary = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function romanToInt(s: string): number {
  let count = 0;

  for(let i = 0; i<s.length; i++) {
    const currentChar = s.charAt(i);
    count += dictionary[currentChar];
  }

  return count;
}
