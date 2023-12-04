export  const helper = {
  shorten: (word) => {
    const splitWord = word.split(" ");
    const shortWord = splitWord[0] + " " + splitWord[1];
    return shortWord;
  },
  seperatePrice: (price) => {
    const splitPrice = price.split(".");

    return splitPrice;
  },
};
