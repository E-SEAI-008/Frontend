import Person from './Person';

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  }
}

export default Employee;
