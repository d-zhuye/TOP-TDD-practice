import {
  practiceModule,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./TDD-practice";

// Test Problem 1: Capitalize Function
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
  });
  test("returns empty string", () => {
    expect(practiceModule.capitalize("")).toBe("");
  });
  test("handles undefined or null arguments", () => {
    expect(practiceModule.capitalize(undefined)).toBe(undefined);
    expect(practiceModule.capitalize(null)).toBe(null);
  });
});

// Test Problem 2: Reverse String
describe("takes a string and returns it reversed", () => {
  test("function exists", () => {
    expect(practiceModule.reverseString).toBeDefined();
  });
  test("returns a reversed string", () => {
    expect(practiceModule.reverseString("orange cat")).toBe("tac egnaro");
  });
  test("returns another string reversed", () => {
    const str = "mango the orange cat";
    const reversedStr = "tac egnaro eht ognam";
    expect(practiceModule.reverseString(str)).toBe(reversedStr);
  });
  test("returns string with number and symbols reversed", () => {
    expect(practiceModule.reverseString("0r@nge c@t")).toBe("t@c egn@r0");
  });
  test("returns empty string", () => {
    expect(practiceModule.reverseString("")).toBe("");
  });
  test("returns white space string", () => {
    expect(practiceModule.reverseString("   ")).toBe("   ");
  });
  test("return a string with unicode characters", () => {
    expect(practiceModule.reverseString("你好世界")).toBe("界世好你");
  });
  test("throw error for non-string arguments", () => {
    expect(() => practiceModule.reverseString(123)).toThrow(
      "Invalid argument. Enter a string."
    );
  });
});

// Test Problem 3: Calculator
describe("check if all functions exists and accepts valid arguments", () => {
  test("calculator object exists", () => {
    expect(calculator).toBeDefined();
  });

  const operations = ["sum", "subtract", "multiply", "divide"];
  test("all calculator operations exists", () => {
    operations.forEach((operation) => {
      expect(calculator[operation]).toBeDefined();
    });
  });
  test("all calculator operations throws error for invalid arguments", () => {
    operations.forEach((operation) => {
      expect(() => calculator[operation](2, "$")).toThrow(
        "Invalid inputs. Enter two numbers."
      );
      expect(() => calculator[operation](2, [2, 4, 5])).toThrow(
        "Invalid inputs. Enter two numbers."
      );
      expect(() => calculator[operation]()).toThrow(
        "Invalid inputs. Enter two numbers."
      );
      expect(() => calculator[operation](2, undefined)).toThrow(
        "Invalid inputs. Enter two numbers."
      );
    });
  });

  describe("return sum of two numbers", () => {
    test("returns sum of two numbers", () => {
      expect(calculator.sum(1, 2)).toBe(3);
      expect(calculator.sum(3.33, 6.45)).toBeCloseTo(9.78);
      expect(calculator.sum(-3, 5)).toBe(2);
    });
  });
  describe("return subtraction of two numbers", () => {
    test("returns difference of positive two numbers", () => {
      expect(calculator.subtract(4, 2)).toBe(2);
      expect(calculator.subtract(-4, -2)).toBe(-2);
      expect(calculator.subtract(6.85, 4.21)).toBeCloseTo(2.64);
    });
  });
  describe("return product of two numbers", () => {
    test("returns product of two numbers", () => {
      expect(calculator.multiply(2, 4)).toBe(8);
      expect(calculator.multiply(-2, 4)).toBe(-8);
      expect(calculator.multiply(-2, -4)).toBe(8);
      expect(calculator.multiply(2.4, 4.2)).toBeCloseTo(10.08);
    });
  });
  describe("return the division of two numbers", () => {
    test("returns division of two numbers", () => {
      expect(calculator.divide(4, 2)).toBe(2);
      expect(calculator.divide(-4, 2)).toBe(-2);
      expect(calculator.divide(-4, -2)).toBe(2);
      expect(calculator.divide(4.4, 2.2)).toBeCloseTo(2);
    });
  });
});

// Test Problem 4: Caesar Cipher
describe("takes a string and shift factor, returns shifted string", () => {
  test("function exists", () => {
    expect(caesarCipher.cipher).toBeDefined();
  });
  test("throw error for invalid argument", () => {
    expect(() => caesarCipher.cipher()).toThrow(
      "Empty input. Please enter a string and a number in the arguments."
    );
    expect(() => caesarCipher.cipher({ One: 1, Two: 2 })).toThrow(
      "Invalid input. Please enter a string."
    );
    expect(() => caesarCipher.cipher("orange cat", "key")).toThrow(
      "Invalid input. Please enter a number for key."
    );
  });
  test("returns shifted string", () => {
    expect(caesarCipher.cipher("xyz")).toBe("abc");
    expect(caesarCipher.cipher("orange cat")).toBe("rudqjh fdw");
  });
  test("returns shifted string with preserved lettercase", () => {
    expect(caesarCipher.cipher("HeLLo")).toBe("KhOOr");
  });
  test("returns shifted string with non-alphabet characters unchanged", () => {
    expect(caesarCipher.cipher("or@ng3 c@7")).toBe("ru@qj3 f@7");
    expect(caesarCipher.cipher("Hello, World!")).toBe("Khoor, Zruog!");
  });
  test("returns shifted string with differing keys", () => {
    expect(caesarCipher.cipher("orange cat", 4)).toBe("sverki gex");
    expect(caesarCipher.cipher("orange cat", 10)).toBe("ybkxqo mkd");
  });
});

// Test Problem 5: Analyze Array
describe("returns object with properties (avg, min, max, len) from a given array", () => {
  test("function exists", () => {
    expect(analyzeArray).toBeDefined();
  });

  describe("throw error for invalid arguments", () => {
    const errorMsg = "Invalid input. Please enter an array of numbers.";
    test("throw error if incorrect data type", () => {
      expect(() => analyzeArray.analyze("a string")).toThrow(errorMsg);
      expect(() => analyzeArray.analyze({ first: 1, second: 2 })).toThrow(
        errorMsg
      );
      expect(() => analyzeArray.analyze(undefined)).toThrow(errorMsg);
      expect(() => analyzeArray.analyze()).toThrow(errorMsg);
    });
    test("throw error if element(s) in array is NaN", () => {
      expect(() => analyzeArray.analyze([1, 2, "three", 4, 5])).toThrow(
        errorMsg
      );
      expect(() => analyzeArray.analyze([1, 2, "&", { key: 4 }, 5])).toThrow(
        errorMsg
      );
    });
  });

  const arrayOne = [1, 8, 3, 4, 2, 6];
  const expectedOne = { average: 4, min: 1, max: 8, length: 6 };

  const arrayTwo = [15, 19, 67, 49, 95, 39, 40, 21, 29];
  const expectedTwo = { average: 41.56, min: 15, max: 95, length: 9 };

  test("returns length of array", () => {
    expect(analyzeArray.analyze(arrayOne).length).toBe(expectedOne.length);
    expect(analyzeArray.analyze(arrayTwo).length).toBe(expectedTwo.length);
  });
  test("returns min value of array", () => {
    expect(analyzeArray.analyze(arrayOne).min).toBe(expectedOne.min);
    expect(analyzeArray.analyze(arrayTwo).min).toBe(expectedTwo.min);
  });
  test("returns max value of array", () => {
    expect(analyzeArray.analyze(arrayOne).max).toBe(expectedOne.max);
    expect(analyzeArray.analyze(arrayTwo).max).toBe(expectedTwo.max);
  });
  test("returns average value of array", () => {
    expect(analyzeArray.analyze(arrayOne).average).toBe(expectedOne.average);
    expect(analyzeArray.analyze(arrayTwo).average).toBe(expectedTwo.average);
  });
  test("returns object with correct values", () => {
    expect(analyzeArray.analyze(arrayOne)).toEqual(expectedOne);
    expect(analyzeArray.analyze(arrayTwo)).toEqual(expectedTwo);
  });
});
