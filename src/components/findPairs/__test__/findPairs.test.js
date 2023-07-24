import findPairs from "..";

describe("findPairs", () => {
  it("should return an empty list if the list is empty", () => {
    const numbers = [];
    const target = 12;
    const expectedPairs = [];
    const actualPairs = findPairs(numbers, target);
    expect(actualPairs).toEqual(expectedPairs);
  });

  it("should return a list of pairs if the list contains two elements that sum to the target", () => {
    const numbers = [1, 9];
    const target = 10;
    const expectedPairs = [[1, 9]];
    const actualPairs = findPairs(numbers, target);
    expect(actualPairs).toEqual(expectedPairs);
  });

  it("should return a list of pairs if the list contains multiple elements that sum to the target", () => {
    const numbers = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const target = 12;
    const expectedPairs = [
      [5, 7],
      [0, 12],
      [-4, 16],
    ];
    const actualPairs = findPairs(numbers, target);
    expect(actualPairs).toEqual(expectedPairs);
  });
});
