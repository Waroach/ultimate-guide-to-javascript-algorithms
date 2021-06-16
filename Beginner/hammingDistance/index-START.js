/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/



// 2 failed 3 passed
function hammingDistance(stringA, stringB) {
    for(i=0; i<stringA.length; i++){
        if(stringA.charAt(i) !== stringB.charAt(i)){
            console.log(i)
            return i
        }
    }
}



module.exports = hammingDistance