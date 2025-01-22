const practiceModule = {
  capitalize(str) {
    if (str === "" || !str) return str;
    return str[0].toUpperCase() + str.slice(1);
  },

  reverseString(str) {
    if (typeof str !== "string") throw new Error("Invalid argument. Enter a string.");
    if (!str) return str;

    return str.split("").reverse().join("");
  },
}

const calculator = {
  checkArguments(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error ("Invalid inputs. Enter two numbers.");
    }
  },

  sum(a, b) {
    this.checkArguments(a, b);
    return a + b;
  },

  subtract(a, b) {
    this.checkArguments(a, b);
    return a - b;
  },

  multiply(a, b) {
    this.checkArguments(a, b);
    return a * b;
  },

  divide(a, b) {
    this.checkArguments(a, b);
    return a / b;
  }
}

export { practiceModule, calculator };