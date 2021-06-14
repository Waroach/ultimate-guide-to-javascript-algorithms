/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    if(stringA.length === stringB.length){
        let a = stringA.split('').sort().join('')
        let b = stringB.split('').sort().join('')
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


module.exports = isAnagram