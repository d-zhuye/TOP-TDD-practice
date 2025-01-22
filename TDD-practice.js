const practiceModule = {
  capitalize(str) {
    if (str === "" || !str) return str;
    return str[0].toUpperCase() + str.slice(1);
  },

  reverseString(str) {
    if (typeof str !== "string")
      throw new Error("Invalid argument. Enter a string.");
    if (!str) return str;

    return str.split("").reverse().join("");
  },
};

const calculator = {
  checkArguments(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Invalid inputs. Enter two numbers.");
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
  },
};

const caesarCipher = {
  cipher(str, key = 3) {
    this.checkArguments(str, key);

    let ciphered = "";

    for (let i = 0; i < str.length; i++) {
      let decimal = str.charCodeAt(i);

      if (decimal >= 65 && decimal <= 90) {
        ciphered += this.fromUpperCase(decimal, key);
      } else if (decimal >= 97 && decimal <= 122) {
        ciphered += this.fromLowerCase(decimal, key);
      } else {
        ciphered += String.fromCharCode(decimal);
      }
    }
    return ciphered;
  },

  checkArguments(str, key) {
    if (!str || !key) {
      throw new Error(
        "Empty input. Please enter a string and a number in the arguments."
      );
    }

    if (typeof str !== "string") {
      throw new Error("Invalid input. Please enter a string.");
    }

    if (typeof key != "number") {
      throw new Error("Invalid input. Please enter a number for key.");
    }
  },

  fromUpperCase(decimal, key) {
    for (let i = 0; i < key; i++) {
      decimal++;
      if (decimal > 90) decimal = 65;
    }
    return String.fromCharCode(decimal);
  },

  fromLowerCase(decimal, key) {
    for (let i = 0; i < key; i++) {
      decimal++;
      if (decimal > 122) decimal = 97;
    }
    return String.fromCharCode(decimal);
  },
};

const analyzeArray = {
  analyze(arr) {
    this.checkArguments(arr);
    const arrSorted = arr.sort((a, b) => a - b);

    let object = {
      min: arrSorted[0],
      max: arrSorted[arr.length - 1],
      length: arr.length,
      average: this.findAverage(arrSorted),
    };
    return object;
  },

  checkArguments(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Invalid input. Please enter an array of numbers.");
    }

    arr.forEach((e) => {
      if (typeof e !== "number") {
        throw new Error("Invalid input. Please enter an array of numbers.");
      }
    });
  },

  findAverage(arr) {
    let avg = arr.reduce((accum, num) => (accum += num / arr.length), 0);
    avg = Math.round(avg * 100) / 100;
    return avg;
  },
};

export { practiceModule, calculator, caesarCipher, analyzeArray };
