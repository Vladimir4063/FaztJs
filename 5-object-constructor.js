//
// CONSTRUCTOR OBJECT
//
const person = new Object("Hola")
person.name = "Guillermo"
person.test = function(){
    return this + "Chamigo"
}
console.log(person.name)



const person2 = {
    name :"Ryan",
    lastname: "Ray",
    age:30,
    showName(){
        return this.name
    }
}

// Quier obtener las claves en un arreglo, puedo recorrerlo
console.log(Object.keys(person2))

// Quiero ver los valores del objeto 
console.log(Object.values(person2))
