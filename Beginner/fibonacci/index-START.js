/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/

                                                    // First Try
// function fibonacci(n){
//     let prev=0, curr=1,temp=0
//     while (n>=0){
//         temp = curr
//         curr = prev + curr
//         prev = temp
//         n--
//         console.log(curr)
//         return curr
//     }
// }
                                                    // Second Try
function fibonacci(n){
    let prev=0, curr=1,temp=0
    for(i=0;i<n;i++){
        temp = curr
        curr = prev + curr
        prev = temp
    }
    console.log(curr)
    return curr
}

module.exports = fibonacci