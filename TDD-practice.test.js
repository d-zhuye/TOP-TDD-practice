import { practiceModule } from "./TDD-practice";

describe("First character capitalized in string", () => {
  test("function exists", () => {
    expect(practiceModule.capitalize).toBeDefined();
  });

  test("returns sampleString", () => {
    const capStr =
      "This is an example string with first character capitalized.";
    expect(practiceModule.capitalize(capStr)).toBe(capStr);
  });

  test("capitalized first letter of all lowercase", () => {
    const lowerStr = "this is a sentence that needs to be capitalized.";
    expect(practiceModule.capitalize(lowerStr)).toMatch(/^[A-Z]/);
  });

  test("handles string with number or symbol as first character", () => {
    const numStr = "123 Sesame Street is my address.";
    expect(practiceModule.capitalize(numStr)).toBe(numStr);
    expect(practiceModule.capitalize("&and")).toBe("&and");
  })

  test("returns empty string", () => {
    expect(practiceModule.capitalize("")).toBe("");
  })

  test("handles undefined or null arguments", () => {
    expect(practiceModule.capitalize(undefined)).toBe(undefined);
    expect(practiceModule.capitalize(null)).toBe(null);
  })
});

