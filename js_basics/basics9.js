const Person = require('./basics8')

class Pet extends Person{
    constructor(firtsName, lastName) {
        //call parent class contructor
        super(firtsName, lastName);
    }

    get location() {
        return 'blue cross'
    }


}

let cat = new Pet('sami', 'same')
cat.fullName()