const sayHello = string => {
  return "Hello, "+string+"!"
};

const uppercase = string => {
  return string.toUpperCase();
};

const lowercase = string => {
  return string.toLowerCase();
};

const countCharacters = string => {
  return string.length;
};

const firstCharacter = string => {
  return string[0];
};

const firstCharacters = (string, n) => {
  let finalString="";
  for (let i=0; i<n; i++){
    finalString=finalString+string[i];
  }
  return finalString;
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
