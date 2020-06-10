const createPerson = (name, age) => ({name,age});

const getName = object => {
  return object.name;
};


const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property)
};

const isOver65 = person => {
  if (person.age>65){
    return true;
  } else {
    return false;
  }
};

const getAges = people => {
  return people.map(i => i.age);
};

const findByName = (name, people) => {
  for (item in people){
    if (people[item].name===name){
      return people[item];}
    };
  }

const findHondas = cars => {
  let resultArr =[];
  for (item in cars){
    if (cars[item].manufacturer==='Honda'){
      resultArr.push(cars[item]);
    }
  }
  return resultArr;
};

const averageAge = people => {
  let agesArr=[];
  for (item in people){
    agesArr.push(people[item].age)
  }
  return agesArr.reduce((a,b)=>a+b,0)/agesArr.length;
};

const createTalkingPerson = (name, age) => {
  const obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.introduce = () => `Hi Fred, my name is ${obj.name} and I am ${obj.age}!`
  return obj;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
