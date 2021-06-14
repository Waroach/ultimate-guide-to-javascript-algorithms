/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    let count = 0
    console.log(text)
    for(i=0; i<text.length; i++){
        if((text.charAt(i) === 'a') || (text.charAt(i) === 'e') || (text.charAt(i) === 'i') || (text.charAt(i) === 'o') || (text.charAt(i) === 'u')){
            console.log(text.charAt(i))
            count++
            console.log(count)
        }
    }
    console.log(`total count = ${count}`)
    return count
}



module.exports = vowelsCounter;
