/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

                                                    // First Try
// function falsyBouncer(array) {
//     let newArr = []
//     array.forEach(e => {
//         if (e == 0 || e == '' || e == undefined || e == false || e == null || e == NaN){
//             console.log(`Fuck this ${e}`)
//         }else{
//             newArr.push(e)
//         }
//     })
//     console.log(newArr)
//     return newArr
// }
                                                    // Using a for…of loop
function falsyBouncer(array) {
    let result =[]
    //loop through with each array value
    for (value of array){
    // push into result if truthy
        if(value){
            result.push(value)
        }
    }
    return result
}
                                                    // Using .filter()
// function falsyBouncer(array) {
//     return array.filter((value) =>{
//         return Boolean(value)
//     })
// }


module.exports = falsyBouncer