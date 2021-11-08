// es6 engine and newer supports classes

class Person {
    age = 25

    get location() { // get => property and not a method
        return 'canada'
    }

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
        console.log(this.firstName + this.lastName)
    }
}


let pers = new Person('tim', 'joe')
console.log(pers.age)
pers.location = 'hello'
console.log(pers.location)

console.log(pers)

pers.fullName()