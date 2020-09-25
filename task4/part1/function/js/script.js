function factorial(n) {
    let num = 1
    while (n > 1) {
     num *= n
     n -= 1
    }
    return num
  }
  console.log(factorial(4));