/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



                                                    // My First Try
// function palindromeChecker(text) {
//     let reverseText = text.split('').reverse().join('')
//     if(reverseText.toLowerCase() === text.toLowerCase()){
//         console.log('Yes Palindrome')
//         console.log(text)
//         console.log(reverseText)
//         return true
//     }else{
//         console.log('No Palindrome')
//         console.log(text)
//         console.log(reverseText)
//         return false
//     }
// }
                                                    // An Intuitive Approach
// function palindromeChecker(text) {

//     var reversedText = text.toLowerCase()
//         .split('').reverse().join('')

//     return text === reversedText
// }
                                                    // Looping through and Comparing Characters
// function palindromeChecker(text) {
//     let charArray = text.toLowerCase().split('')

//     let result = charArray.every((letter, index) => {
//         return letter === charArray[charArray.length - index - 1];
//     })

//     return result
// }
                                                    // Looping through and Comparing Characters (Optimized)
function palindromeChecker(text) {
    var textLen = text.length;
    for (var i = 0; i < textLen/2; i++) {
        if (text[i] !== text[textLen - 1 - i]) {
            return false;
        }
    }
    return true;
}


module.exports = palindromeChecker;