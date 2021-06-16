/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


                                                    // An Iterative Approach
function vowelsCounter(text) {
    const vowels = ["a","e","i","o","u"]
    let count = 0
    for(let letter of text.toLowerCase()){
        if (vowels.includes(letter)){
            count++
        }
    }
    return count
}
                                                    //
                                                    //
                                                    //
                                                    //
    // ********** OR **********



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