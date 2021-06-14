/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// THIS IS WRONG ORIGINAL CODE? Should be longest Word no reverse Word?

function longestWord(text) {
    let reverseText = text.split('').reverse().join('')
    console.log(text)
    console.log(reverseText)
    return reverseText
}


module.exports = longestWord