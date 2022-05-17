function showFullName(){
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
  showHiHow(){
      return "Hi, How are you?"
  }
};

//console.log(user);

console.log(user.showFullNameProp());
console.log(user.showHiHow())