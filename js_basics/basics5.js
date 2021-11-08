let day = 'monday '
console.log(day.slice(0,4))

let splitDay = day.split('d')
console.log(splitDay)
console.log(splitDay[1].trim())
console.log(splitDay[1].trim().length)

let date = '23'
let nextDate = '27'

let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)

console.log(typeof diff.toString())

// concat strings
let quote = day + 'is fun day'
console.log(quote)

console.log(quote.indexOf('day'))
console.log(quote.indexOf('day', 5))

// number of occurrences of substring in word
let count = 0
let value = quote.indexOf('day')
while (value != -1) {
    count++
    value = quote.indexOf('day', value + 1)
}

console.log(count)