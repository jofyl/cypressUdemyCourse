function add(a, b) {
    return a + b
}

console.log(add(2, 4))

// anonymous function
let sumOfNums = function (a, b) {
    return a + b
}

let sumOfNums2 = (a, b) => {
    return a + b
}

let sumOfNums3 = (a, b) => a + b

console.log(sumOfNums2(2, 4))
console.log(sumOfNums3(2, 4))

// var => global if declared globally / function if declared in function
// let => global if declared globally / scope if declared in block

var greet = 'evening'

if (true) {
    var greet = 'afternoon'
}

function testme(){
    var greet = 'morning'
}

console.log(greet)

// using let

let greet2 = 'evening'

if (true) {
    let greet2 = 'afternoon'
}

function testme(){
    let greet2 = 'morning'
}

console.log(greet2)
