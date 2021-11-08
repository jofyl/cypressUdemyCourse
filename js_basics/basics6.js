// object is a collection of properties

let person = {
    firstName: 'tim',
    lastName: 'joe'
}

console.log(person.lastName)
console.log(person['lastName'])

person.firstName = 'hello'
person.gender = 'male'

console.log(person)

delete person.gender
console.log(person)

// check if property exists
console.log('gender' in person)

// print all the values of js object
for (let key in person) {
    console.log(person[key])
}

let person2 = {
    firstName: 'tim',
    lastName: 'joe',

    fullName: function () {
        console.log(this.firstName + this.lastName)
    }
}

for (let key in person2) {
    console.log(person[key])
}

person2.fullName()