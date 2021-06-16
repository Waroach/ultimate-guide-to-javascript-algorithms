/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function reverseString(text){
                                                    // Chaining IN-BUILT Method
    // return text.split('').reverse().join('')
    // ********** OR **********
    // return [...text].reverse().join('')
    // ********** OR **********
                                                    // FOR-LOOP-WAY
    // ********** OR ********** FORWARD WAY
    // let array = text.split('')
    // let reverse = []
    // for (i=0; i<array.length; i++) {
    //     reverse.unshift(array[i])
    //     console.log(reverse)
    // }
    // return reverse.join('')
    // ********** OR **********  BACKWARDS WAY
    // let reverseText = ""
    // for (let i = text.length - 1; i >= 0; i--) {
    //     reverseText += text[i]
    // }
    // return reverseText
    // ********** OR ********** BACKWARDS WAY ANOTHER BACKWARDS IE6
    // The for…of statement in JavaScript is used to execute a certain piece of code for each distinct item(property) of an iterable object.
    // let result = ""
    // for(let char of text){
    //     result = char + result
    // }
    // return result
    // ********** OR ********** 
                                                    // The RECURSIVE WAY
    // ********** OR **********
    // if (text === "") {
    //     return ""
    // } else {
    //     return reverseString(text.substr(1)) + text[0]
    // }
    // ********** OR **********
                                                    //  .reduce()   REDUCE METHODE
    // ********** OR **********
    // return text.split("").reduce((acc, char) => char + acc, '')
    // ********** OR **********
    return [...text].reduce((acc, char) => char + acc, '')
    // ********** OR **********
}
/// the  t + h + e
e+h+t




module.exports = reverseString

// ******** Before reading Scotch.IO ********
// function reverseString(text) {
//     let reverseText = text.split('').reverse().join('')
//     console.log(text)
//     console.log(reverseText)
//     return reverseText
// }