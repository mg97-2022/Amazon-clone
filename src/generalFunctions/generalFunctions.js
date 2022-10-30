export const formatNumbers = (num) => {
  return num.toString().replace(/^[+-]?\d+/, function (int) {
    return int.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  });
};

export const trimWord = (word, n) => {
  return word.length > n ? word.substr(0, n) + "..." : word;
};
