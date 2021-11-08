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