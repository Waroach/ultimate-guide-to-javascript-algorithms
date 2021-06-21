// Given an array of two numbers, return the
// cummulative sum of the two numbers and all
// the numbers between them. E.g

                                        // My First Try
// function rangeSum(arr){
//     let sum = 0
//     let total = '0'
//     for(i=arr[0];i<=arr[1];i++){
//         sum = sum + i
//         total = `${total} + ${i}`
//     }
//     console.log(`${sum} i.e ${total}`)
// }
                                        // Using a For-Loop
function rangeSum(arr) {
    let sum = 0;
    for (i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }
    return sum;
}
                                        // Using the Arithmetic Progression Formula
// function rangeSum(arr) {
//     return ((arr[1] - arr[0] +1) * (arr[0] + arr[1])) / 2;
// }
                                        // Using Recursion
// function rangeSum(arr) {
//     if (arr[0] == arr[1]) {
//         return arr[0];
//     } else {
//         return rangeSum([arr[0], arr[1] - 1]) + arr[1];
//     }
// }
                                        // Using .reduce()
// function rangeSum(arr) {
//     let arrList = [];
//     for (i = arr[0]; i <= arr[1]; i++) {
//         arrList.push(i);
//     }
//     return arrList.reduce((acc, num) => acc + num, 0);
// }

rangeSum([1,9]) 
// Should return 45 i.e 1+2+3+4+5+6+7+8+9