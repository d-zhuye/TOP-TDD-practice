const practiceModule = {
  capitalize(str) {
    if (str === "" || !str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
}

export { practiceModule };