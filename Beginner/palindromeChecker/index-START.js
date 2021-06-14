/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    let reverseText = text.split('').reverse().join('')
    if(reverseText.toLowerCase() === text.toLowerCase()){
        console.log('Yes Palindrome')
        console.log(text)
        console.log(reverseText)
        return true
    }else{
        console.log('No Palindrome')
        console.log(text)
        console.log(reverseText)
        return false
    }
}



module.exports = palindromeChecker;