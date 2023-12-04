export const helper = {
  shorten: (word) => {
    const splitWord = word.split(" ");
    const shortWord = splitWord[0] + " " + splitWord[1];
    return shortWord;
  },
  seperatePrice: (price) => {
    const splitPrice = price.split(".");
    return splitPrice;
  },
  isEmpty: (value) => {
    return typeof value === "string" && !value.trim().length;
  },
  checkEmail: (email) => {
    const isValid = email.match(
      /[a-z+][a-z0-9/./_]@[a-z]{2,10}.[a-z]{2-10}/gim
    );
    return isValid;
  },
};
