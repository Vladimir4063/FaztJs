function showFullName() {
  return "Ryan Ray";
}

const user = {
  name: "Vladimir",
  surname: "Gutierrez",
  age: 24,
  hobbies: ["Run", "Read", "programming"],
  addres: {
    street: "victor hugo",
    city: "Ostende, Pinamar",
  },
  showFullNameProp: showFullName,
  showHiHow() {
    // console.log(this.name)
    // return "Hi, How are you?";
    return this.name +" "+ this.surname
  }
};

//console.log(user.showFullNameProp());
// console.log(user.showHiHow());
// console.log(user);


const account = {
  number: "2131231231231",
  amount: 100,
  deposit(quantity) {
    this.amount = this.amount + quantity;
  },
  withdraw(quantity) {
    this.amount = this.amount - quantity;
  },
};

// llamo a los metodos del objeto
account.deposit(100);
account.deposit(50);
account.deposit(10);

console.log(account);

account.withdraw(45);
account.withdraw(100);

console.log(account)