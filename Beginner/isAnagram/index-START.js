/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/


                                                    // My First Try
function isAnagram(stringA, stringB) {
    if(stringA.length === stringB.length){
        let a = stringA.toLowerCase().split('').sort().join('')
        let b = stringB.toLowerCase().split('').sort().join('')
        if(a === b){
            console.log('Is A Anagram')
            return true
        }else{
            console.log('Not A Anagram')
            return false
        }
    }else{
        console.log('Does not have same length, So NO Not A Anagram')
        return false
    }
}
                                                    // Direct comparison
// function isAnagram(stringA, stringB){
//     const sanitizeString = function (str) {
//         return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
//     }
//     return sanitizeString(stringA) == sanitizeString(stringB)
// }
                                                    // Character Map Comparison
// function isAnagram(stringA, stringB) {
//     function createCharMap(text) {
//         let charMap = {}
//         for (let char of text) {
//             if (charMap.hasOwnProperty(char)) {
//                 charMap[char]++
//             } else {
//                 charMap[char] = 1
//             }
//         }
//         return charMap
//     }

//     if (stringA.length === stringB.length) {
//         let stringAMap = createCharMap(stringA)
//         let stringBMap = createCharMap(stringB)
//         for (let char in stringAMap) {
//             if (stringAMap[char] !== stringBMap[char]) {
//                 return false
//             }
//         }
//         return true
//     } else {
//         return false
//     }
// }

module.exports = isAnagram