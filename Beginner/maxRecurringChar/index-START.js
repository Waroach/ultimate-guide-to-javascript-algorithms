/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


                                                    // Character Mapping
// function maxRecurringChar(text) {
//     let charMap = {}

//     for(let char of text){
//         if(charMap.hasOwnProperty(char)) {
//             charMap[char]++
//         }else{
//             charMap[char] = 1
//         }
//     }
// }
                                                    // For…in Iteration
function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}
                                                    // Forming Arrays from the Character Map
// function maxRecurringChar(text) {
//     let charMap = {}
//     let charArray =[]
//     let vaulesArray = []
//     let maxCharValue = 0

//     for (let char of text) {
//         if (charMap.hasOwnProperty(char)) {
//             charMap[char]++
//         } else {
//             charMap[char] = 1
//         }
//     }

//     charArray = Object.keys(charMap)
//     vaulesArray = Object.values(charMap)
//     maxCharValue = Math.max(...vaulesArray)

//     return charArray[vaulesArray.indexOf(maxCharValue)]
// }
                                                    //

module.exports = maxRecurringChar;