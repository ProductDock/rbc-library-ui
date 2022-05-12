import SetUtil from "./setUtil";

describe("SetUtil intersection", () => {
  test("should return intersection of two arrays", async () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [2, 4, 5, 6];

    const intersection = SetUtil.intersection(array1, array2);
    expect(intersection).toEqual([2, 4]);
  });

  test("should return empty array when two arrays not intersecting", async () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [0, 8, 5, 6];

    const intersection = SetUtil.intersection(array1, array2);
    expect(intersection).toEqual([]);
  });
});

describe("SetUtil isSubset", () => {
  test("should return true when array is subset of other", async () => {
    const array1 = [2, 4];
    const array2 = [1, 2, 3, 4];

    const isSubset = SetUtil.isSubset(array1, array2);
    expect(isSubset).toEqual(true);
  });

  test("should return false when array is not subset of other", async () => {
    const array1 = [2, 4, 5];

    const array2 = [1, 2, 3, 4];

    const isSubset = SetUtil.isSubset(array1, array2);
    expect(isSubset).toEqual(false);
  });
});

describe("SetUtil difference", () => {
  test("should return difference between two sets", async () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [2, 4];

    const difference = SetUtil.difference(array1, array2);
    expect(difference).toEqual([1, 3]);
  });

  test("should return whole set when they not intersecting", async () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [5, 6];

    const difference = SetUtil.difference(array1, array2);
    expect(difference).toEqual(array1);
  });

  test("should return empty array when they fully intersecting", async () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [1, 2, 3, 4];

    const difference = SetUtil.difference(array1, array2);
    expect(difference).toEqual([]);
  });
});
