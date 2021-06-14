/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    let a=1,b=0,temp
    while (n >= 0) {
        temp=a
        a = a + b
        b = temp
        n--
        console.log(b)
        return b
    }
}

module.exports = fibonacci