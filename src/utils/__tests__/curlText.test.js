import curlText from "../curlText";

it("should return same string if is not longer then expected value", () => {
  const result = curlText("a", 10);
  expect(result).toBe("a");
});

it("should curl text that is to long", () => {
  const result = curlText("aaaaaaaa", 1);
  expect(result).toBe("a...");
});
