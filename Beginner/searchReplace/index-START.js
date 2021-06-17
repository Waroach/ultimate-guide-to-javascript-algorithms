// test
                                                    // Using .replace()
// function searchReplace(str, word, newWord){
//     if ( word[0] === word[0].toUpperCase() ) {
//         newWord = newWord[0].toUpperCase() + newWord.slice(1)
//     }
//     return str.replace(word, newWord)
// }
                                                    // Using Regular Expression
function searchReplace(str, word, newWord) {
    let regex = new RegExp(word, "gi");
    // Note: **g** and **i** as specified in the second argument are 
    // regular expression flags with the following meanings.
    // | g | - Global search(look in the whole string and return all matches)
    // | i | - Case-insensitive search.
    if (/[A-Z]/.test(word[0])) {
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }
    return str.replace(regex, newWord)
}
searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"
