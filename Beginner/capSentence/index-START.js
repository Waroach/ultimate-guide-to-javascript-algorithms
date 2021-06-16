/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



                                                    // My first Try
// function capSentence(text) {
//   // make array lower case and split it into singles
//   const arr = text.toLowerCase().split(" ")
//   // step thru array and make first letter upper case.
//   for(i=0; i<arr.length;i++){
//       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
//   }
//   // join singles back into a array
//   const newArr = arr.join(" ")
//   console.log(newArr)
//   return newArr
// }
                                                    // Using .forEach() Method
// function capSentence(text) {
//   let wordsArray = text.toLowerCase().split(' ')
//   let capsArray = []

//   wordsArray.forEach(word => {
//       capsArray.push(word[0].toUpperCase() + word.slice(1))
//   });

//   return capsArray.join(' ')
// }
                                                    // Using .map() and .slice()
// function capSentence(text) {
//   let wordsArray = text.toLowerCase().split(' ')
//   let capsArray = wordsArray.map(word=>{
//       return word[0].toUpperCase() + word.slice(1)
//   })
//   return capsArray.join(' ')
// }
                                                    // Using .map() and .replace()
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = wordsArray.map( word=>{
      return  word.replace(word[0], word[0].toUpperCase())
  })
  return capsArray.join(' ')
}




module.exports = capSentence