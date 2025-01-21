import exp from "constants";
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


describe("takes a string and returns it reversed", () => {
  test("function exists", () => {
    expect(practiceModule.reverseString).toBeDefined();
  })

  test("returns a reversed string", () => {
    expect(practiceModule.reverseString("orange cat")).toBe("tac egnaro");
  })

  test("returns another string reversed", () => {
    const str = "mango the orange cat";
    const reversedStr = "tac egnaro eht ognam";
    expect(practiceModule.reverseString(str)).toBe(reversedStr);
  })

  test("returns string with number and symbols reversed", () => {
    expect(practiceModule.reverseString("0r@nge c@t")).toBe("t@c egn@r0");
  })

  test("returns empty string", () => {
    expect(practiceModule.reverseString("")).toBe("");
  })

  test("returns white space string", () => {
    expect(practiceModule.reverseString("   ")).toBe("   ");
  })

  test("return a string with unicode characters", () => {
    expect(practiceModule.reverseString("你好世界")).toBe("界世好你");
  })

  test("throw error for non-string arguments", () => {
    expect(() => practiceModule.reverseString(123)).toThrow("Invalid argument. Enter a string.");
  })
})