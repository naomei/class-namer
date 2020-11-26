import { classNamer } from "./";

it("classNamer", () => {
  expect(classNamer("a", "a", null, { a: null, b: true, c: false })).toEqual(
    "a b"
  );
  expect(classNamer("a", undefined, null, { c: null, d: true })).toEqual("a d");
});
