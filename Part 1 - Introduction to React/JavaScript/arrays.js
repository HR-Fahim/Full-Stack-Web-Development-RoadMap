const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
})                    


// Array map 

const t2 = [1, 2, 3]
const tSquared = t2.map(p => p * p)

console.log(tSquared)

// tSquared is now [1, 4, 9]