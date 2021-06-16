/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/



                                                    // My First Try
function hammingDistance(stringA, stringB) {
    let count = 0
    for(i=0; i<stringA.length; i++){
        if(stringA.charAt(i) != stringB.charAt(i)){
            count++
        }
    }
    return count
}
                                                    // for-loop
// function hammingDistance(stringA, stringB) {
//     let result = 0
//     if (stringA.length == stringB.length) {
//         for (let i = 0; i < stringA.length; i++) {
//             if (stringA++[++i].toLowerCase() != stringB++[++i].toLowerCase()) {
//                 result++
//             }
//         }

//         return result

//     } else {
//         throw new Error('Strings do not have equal length')
//     }
// }
                                                    // 

                                                    // 

                                                    // 


module.exports = hammingDistance