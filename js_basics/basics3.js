let marks = Array(6)
let marks2 = new Array(20, 40, 50)
let marks3 = [60, 80, 90]

console.log(marks3.length)
console.log()

marks3.push(100)
console.log(marks3)

marks3.pop()
console.log(marks3)

marks3.unshift(1)
console.log(marks3)
marks3.unshift(1, 2)
console.log(marks3)
marks3.unshift([1, 2])
console.log(marks3)

marks3.shift()
console.log(marks3)
marks3.shift()
console.log(marks3)

console.log(marks3)
console.log(marks3.indexOf(80))

console.log(marks3.includes(120))

console.log(marks3.includes(80))
// start looking for 80 from index = 4
console.log(marks3.includes(80, 4))

// slince elements at index 1 and 2
console.log(marks3.slice(1, 3))

let sum = 0
for (let i = 0; i < marks3.length; i++){
    sum += marks3[i]
}

console.log(sum)

//**********************
//reduce, filter and map
console.log('\n*************************\n')

console.log(marks3)
marks3.reduce(getSum, 1000)

function getSum(total, currentValue) {
    console.log(currentValue)
    console.log(total)
    return total + currentValue
}

console.log(marks3.reduce((total, num) => total + num, 0))


var scores = [12, 13, 14, 15]

let newFilteredArray = scores.filter(score  => score % 2 == 0)
console.log(newFilteredArray)

let newMappedArray = newFilteredArray.map(score => score * 3)
console.log(newMappedArray)

let scores2 = [12, 13, 14, 15]

let result = scores2.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, val) => sum + val, 0)
console.log(result)

// sort

let fruits = ['apple', 'mango', 'banana', 'lemon', 'Mango']
console.log(fruits.sort())

let numbers = [4,5,2,9,0,3]
console.log(numbers.sort())

var numbers2 = [4,5,2,003,9,0]
console.log(numbers2.sort())


var numbers2 = [4,5,2,003,9,0]
console.log(numbers2.sort((a,b) => a-b))
console.log(numbers2.sort((a,b) => b-a))

var numbers2 = [4,5,2,003,9,0]
console.log(numbers2.reverse())
