/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


// 2 failed 2 passed
function whereIBelong(arr, num) {
   let i = 0
   for(currNumber of arr){
      if (num < currNumber){
         console.log(` I Belong here ${i}`)
         return i
      }
      i++
   }
}



module.exports = whereIBelong