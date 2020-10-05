import sum from "../sum";

describe("sum", () => {
  test.each`
    a     | b     | result
    ${1}  | ${2}  | ${3}
    ${-1} | ${-2} | ${-3}
  `("returns $result as a sum of $a and $b", ({ a, b, result }) => {
    expect(sum(a, b)).toBe(result);
  });
});
