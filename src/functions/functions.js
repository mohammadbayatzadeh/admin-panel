export const shorten = (word) => {
  const splitWord = word.split(" ");
  const shortWord = splitWord[0] + splitWord[1];
  return shortWord;
};

export const seperatePrice = (price) => {
  const splitPrice = price.split(".");
  return splitPrice;
};
