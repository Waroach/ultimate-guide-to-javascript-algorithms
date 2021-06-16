/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/


// 2 failed 1 passed
function fizzBuzz(n) {
    let count = 1
    while (count <= n){
        if((count % 3 === 0) && (count % 5 === 0)){
            console.log('FizzBuzz')
            return fizzBuzz
            count++
        }else if(count % 3 === 0){
            console.log('Fizz')
            return Fizz
            count++
        }else if(count % 5 === 0){
            console.log('Buzz')
            return Buzz
            count++
        }else{
            console.log(count)
            return count
            count++
        }
    }
}


module.exports = fizzBuzz