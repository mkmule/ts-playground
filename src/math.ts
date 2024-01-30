const addNTimes = (base: number, n: number) => {
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += base;
  }

  return res;
};
export const multiply = (a: number, b: number) => {
  if (a < 0 && b < 0) {
    return addNTimes(Math.abs(a), Math.abs(b));
  }

  let result = addNTimes(a, Math.abs(b));
  if (result > 0 && (a < 0 || b < 0)) {
    return -result;
  }

  return result;
};
