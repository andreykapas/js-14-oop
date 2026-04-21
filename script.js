'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const andrei = new Person('Andrei', 1977);
// console.log(andrei);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// andrei.calcAge();

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
mike.introduce();
mike.calcAge();

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
    // console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  static hey() {
    // console.log('Hey there!');
    // console.log(this);
  }
}

const jessica = new PersonCl('Jessica', 2001);
// console.log(jessica);

jessica.calcAge();
// console.log(jessica.age);

PersonCl.hey();
