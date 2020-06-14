const getNthElement = (index, array) => {
  if (index <= array.length -1) {
    return array[index];
  }
  return array[(array.length - index) * -1];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(num => num.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  const reverseFunction = string => {
    const newString = Array.from(string).reverse().join('');
    return newString;
  };
  return strings.map(string => reverseFunction(string));
};

const onlyEven = numbers => {
  return numbers.filter(num => num%2 === 0);
}

const removeNthElement2 = (index, array) => {
  return array.filter(element => element !== array[index]);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => /^[aeiou]/i.test(string));
};

const removeSpaces = string => {
  return string.replace(/\s+/g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((a,b)=>a+b,0);
};

const sortByLastLetter = strings => {
  const compareStrings = (a,b) => {
    if (a.slice(-1) < b.slice(-1)) return -1;
    if (a.slice(-1) > b.slice(-1)) return 1;
    return 0;
  } 
  return strings.sort(compareStrings);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
