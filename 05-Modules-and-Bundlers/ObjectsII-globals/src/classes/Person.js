class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // getters
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }

  // setters
  set name(value) {
    if(!value || typeof value !== 'string') {
      throw new Error('Name must be a non-empty string.');
    }
    this._name = value;
  }
  set age(value) {
    if(!Number.isInteger(value) || value < 18) {
      throw new Error('Age must be an integer greater than or equal to 18.');
    }
    this._age = value;
  }

  // regular method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

export default Person;