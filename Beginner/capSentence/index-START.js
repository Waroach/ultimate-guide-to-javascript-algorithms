/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
  // make array lower case and split it into singles
  const arr = text.toLowerCase().split(" ")
  // step thru array and make first letter upper case.
  for(i=0; i<arr.length;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  // join singles back into a array
  const newArr = arr.join(" ")
  console.log(newArr)
  return newArr
}



module.exports = capSentence