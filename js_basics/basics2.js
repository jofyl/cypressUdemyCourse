const flag = true
if (flag) {
    console.log('condition is met')
} else {
    console.log('condition is not met')
}

if (!flag) {
    console.log('condition is met')
} else {
    console.log('condition is not met')
}

let i = 0
while(i < 10){
    i++
    console.log(i)
}

i = 0
do {
    i++
    console.log(i)
} while (i > 10)
console.log(i)

let n = 0
for (let k = 0; k <= 100; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        n++
        console.log(k)
        if (n == 3){
            break
        }
    }

    // || => or operator
}