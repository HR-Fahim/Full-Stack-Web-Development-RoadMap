const t = [1, -1, 3]

const t2 = t.concat(5)  // creates new array

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed


const t3 = [1, 2, 3]

const m1 = t3.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed


const t4 = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t4

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed