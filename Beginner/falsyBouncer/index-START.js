/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    let newArr = []
    array.forEach(e => {
        if (e == 0 || e == '' || e == undefined || e == false || e == null || e == NaN){
            console.log(`Fuck this ${e}`)
        }else{
            newArr.push(e)
        }
    })
    console.log(newArr)
    return newArr
}


module.exports = falsyBouncer