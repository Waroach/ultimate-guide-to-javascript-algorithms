// Keep the following rules in mind:
// The signs must not change i.e -123 becomes -321
// The value returned must be an integer.
// All insignificant zeroes must be removed i.e 900 becomes 9 and not 009


// Complete Solution
// Reverse a string
function reverseString(text){
    return [...text].reduce((acc,char)=>char+acc,'')
}
// Reverses an integer
function reverseInteger(num){
    let reversedNumber = parseInt(reverseString(num.toString()))
    console.log((reversedNumber * Math.sign(num)))
    return (reversedNumber * Math.sign(num))
}

reverseInteger(-123) // should return -321
