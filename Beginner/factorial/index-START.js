/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/
// the factorial of 3 is (3 * 2 * 1 = 6)
// the factorial of 5 is (5 * 4 * 3 * 2 * 1 = 120)

// function factorial(n, memo) {
//     memo = memo || {}
//     if(memo[n]){
//         return memo[n]
//     }  
//     if (n === 0) {
//         return 1
//     }
//     return memo[n] = n * factorial(n - 1, memo)
// }


function factorial(n){
    let curr = Number(n)
    for(i=n; i>1; i--){
        curr = (curr * (i-1))
    }
    console.log(`END ${curr}`)
    return curr
}

factorial(5)

module.exports = factorial