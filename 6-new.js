function Person(){
    "use strict"
    this.name = ""
    this.latname = ""
}
// Si no referenciamos con la palabra new, se estará asignando la clase a una clase super interna
// use strict funciona para evitar este error

const person = new Person()
person.name = "Vladimir"
person.latname = "Gutierrez"
console.log(person);
console.log(person.name)
console.log(person.latname)