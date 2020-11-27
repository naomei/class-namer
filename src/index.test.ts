import { classNamer } from "./";

describe("classNamer", () => {
  it("string", () => {
    expect(classNamer("a", "b", "c", false, null)).toEqual(
      "a b c"
    );
  });

  it("array", () => {
    expect(classNamer(["a", false, "b"])).toEqual(
      "a b"
    );
  });

  it("object", () => {
    expect(classNamer({a: null, b: true, c: true})).toEqual(
      "b c"
    );
  });

  it("complex", () => {
    expect(classNamer("a", "a", null, { a: null, b: true, c: false })).toEqual(
      "a b"
    );

    expect(classNamer("a", { b: false, c: true }, ["e", null, "f"])).toEqual(
      "a c e f"
    );
  });
});