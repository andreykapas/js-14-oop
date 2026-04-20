'use strict';

///////////////////////////////////////////////////////
// 1. Constructor Functions & the new Operator

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas);       // Person { firstName: 'Jonas', birthYear: 1991 }
console.log(matilda);
console.log(jack);

// What happens when we call a function with `new`:
// 1. A new empty object {} is created
// 2. The function is called, `this` = the new object
// 3. The new object is linked to a prototype
// 4. The function automatically returns the new object

console.log(jonas instanceof Person); // true
