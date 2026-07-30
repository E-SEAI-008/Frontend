import Person from './Person';

class Customer extends Person {
  constructor(name, age, customerId) {
    super(name, age);
    this.customerId = customerId;
  }

  makePurchase(item) {
    console.log(`${this.name} (Customer ID: ${this.customerId}) purchased ${item}.`);
  }
}

export default Customer;
