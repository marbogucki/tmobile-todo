import sortItems from "../sortItems";

it("should sort array of objects by value to be asc", () => {
  const unsortedArrayOfNumbers = [{ a: 1 }, { a: 20 }, { a: 5 }];
  const result = sortItems(unsortedArrayOfNumbers, "a", "asc");
  expect(result).toStrictEqual([{ a: 1 }, { a: 5 }, { a: 20 }]);
});

it("should sort array of objects by value to be desc", () => {
  const unsortedArrayOfNumbers = [{ a: 1 }, { a: 20 }, { a: 5 }];
  const result = sortItems(unsortedArrayOfNumbers, "a", "desc");
  expect(result).toStrictEqual([{ a: 20 }, { a: 5 }, { a: 1 }]);
});
