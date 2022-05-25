const user = {
    name : "Vladimir",
    lastname : "Gutierrez",
    age : 24,
    showFullName(){
        return this.name + " " + this.lastname
    }
}


// Constructor
function Person(){
    this.name = ""
    this.lastname = ""
    this.age = 0,
    this.showFullName = function(){
        return this.name + " " + this.lastname
    }
}

const user2 = new Person()

user2.name = "Ivan"
user2.lastname = "Gutierrez"
user2.age = 26
// console.log(user2)
console.log(user2.showFullName())

// instancio desde la clase y reutilizo las propiedades 
const user3 = new Person()
user3.name = "Maggi"
user3.lastname = "Mycol"
console.log(user3.showFullName());

const user4 = new Person()
user4.name = "Maicol"
user4.lastname = "Cheguevara"
console.log(user4.showFullName());

const user5 = new Person();
user5.name = "Lisi"
user5.lastname = "Crown"
console.log(user5.showFullName());

const user6 = new Person();
console.log(user6)

