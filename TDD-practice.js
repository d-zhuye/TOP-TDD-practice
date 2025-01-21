const practiceModule = {
  capitalize(str) {
    if (str === "" || !str) return str;
    return str[0].toUpperCase() + str.slice(1);
  },

  reverseString(str) {
    if (typeof str !== "string") throw new Error("Invalid argument. Enter a string.");
    if (!str) return str;

    return str.split("").reverse().join("");
  }
}

export { practiceModule };