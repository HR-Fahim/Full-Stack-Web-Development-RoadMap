const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
  }

const result = sum(1, 5)
console.log(result)


const square = p => {
    console.log(p)
    return p * p
  }

console.log(square(5))


const square_using_arrow = p => p * p
console.log(square_using_arrow(5))


function product(a, b) {
    return a * b
  }
  
  const result_using_function = product(2, 6)
  console.log(result_using_function)
  // result is now 12



  const average = function(a, b) {
    return (a + b) / 2
  }
  
  const another_result_using_function = average(2, 5)
  console.log(another_result_using_function)
  // result is now 3.5