/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


                                                    // An Iterative Approach
// function vowelsCounter(text) {
//     const vowels = ["a","e","i","o","u"]
//     let count = 0
//     for(let letter of text.toLowerCase()){
//         if (vowels.includes(letter)){
//             count++
//         }
//     }
//     return count
// }
                                                    // Using Regular Expressions
function vowelsCounter(text) {
    // Search text with Regex and store all matching instances 
    let matchingInstances = text.match(/[aeiou]/gi)
    // g stands for a global search which means that after finding the first match, it will 
    // not start over from the beginning but continue searching from the end of the previous match.
    // i stands for case insensitive search which makes the whole expression case-insensitive 
    // (for example /xyz/i would match XyZ).

    // Check if matching instances exist then calculate length
    if (matchingInstances) {    
        // Return number of vowels
        return matchingInstances.length
    } else {
        return 0
    }
}



module.exports = vowelsCounter;


// Working before Class
// function vowelsCounter(text) {
//     let count = 0
//     console.log(text)
//     for(i=0; i<text.length; i++){
//         if((text.charAt(i).toLowerCase() === 'a') || (text.charAt(i).toLowerCase() === 'e') || (text.charAt(i).toLowerCase() === 'i') || (text.charAt(i).toLowerCase() === 'o') || (text.charAt(i).toLowerCase() === 'u')){
//             console.log(text.charAt(i))
//             count++
//             console.log(count)
//         }
//     }
//     console.log(`total count = ${count}`)
//     return count
// }