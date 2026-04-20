'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const andrei = new Person('Andrei', 1977);
// console.log(andrei);

Person.prototype.calcAge = function () {
  // console.log(2037 - this.birthYear);
};

andrei.calcAge();

// console.log(Person.prototype.isPrototypeOf(andrei));
// console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
// console.log(andrei.species);

// console.log(andrei.hasOwnProperty('firstName'));
// console.log(andrei.hasOwnProperty('species'));

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
}

const jessica = new PersonCl('Jessica', 2001);
console.log(jessica);

jessica.calcAge();
console.log(jessica.age);
