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
    return email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
  },
};
