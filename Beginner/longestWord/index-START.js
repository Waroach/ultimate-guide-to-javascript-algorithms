/* CHALLENGE
    find longest word in sentence
*/

                                                    // Using a For-Loop
function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }

    return result
}
                                                    // Using .reduce()
// function longestWord(text) {
//     var result = text.split(' ').reduce((maxLengthWord, currentWord) => {
//         if (currentWord.length > maxLengthWord.length) {
//             return currentWord
//         } else {
//             return maxLengthWord
//         }
//     }, "")
//     return result
// }
                                                    // Using .sort()
// function longestWord(text) {
//     var sortedArray = text.split(' ')
//                             .sort((wordA, wordB) => wordB.length - wordA.length)
//     return sortedArray[0]
// }


module.exports = longestWord