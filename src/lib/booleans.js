const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a&&b;
};

const either = (a, b) => {
  return a||b;
};

const none = (a, b) => {
  return !a&&!b;
};


const one = (a, b) => {
  if (a&&b){
    return false;}
    else if (!a&&!b) {
      return false; }
    else {
      return true;
    }
};

const truthiness = a => {
  return Boolean(a);
};

const isEqual = (a, b) => {
  return a===b;
};

const isGreaterThan = (a, b) => {
  return a>b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a<=b;
};

const isOdd = a => {
  return(a%2 !==0);
};

const isEven = a => {
  return (a%2 ===0);
};

const isSquare = a => {
  return Math.sqrt(a)%1 ===0;
};

const startsWith = (char, string) => {
  return char===string[0];
};

const containsVowels = string => {
  string =string.toLowerCase();
  const vowels=['a','e','i','o','u'];
  let result =false;
  for (let i=0; i<string.length; i++){
    if (vowels.indexOf(string[i]) !== -1){
      return result=true;
    }
  }
  return result;}

const containsVowelsTwo = string => {
  string=string.toLowerCase();
  let result=false;
  for (let i=0; i<string.length; i++){
    if (string[i] ==='a' || string[i] ==='e' ||string[i]==='i'||string[i]==='o'||string[i]==='u'){
      return result=true;
    } 
  }
  return result;
}

const containsVowelsThree = string => {
  const regex =/a|e|o|i|u/i; 
  return Boolean(string.match(regex));
};


const isLowerCase = string => {
  return (string===string.toLowerCase());}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
