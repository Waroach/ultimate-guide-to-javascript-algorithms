/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });
// ****************** START of My Code Same as chunkArray
    let uniqueArray = jointArray.filter((c,i) => {
        return jointArray.indexOf(c) === i
    })
    console.log(uniqueArray)
// ****************** END of My Code Same as chunkArray
    return [...new Set([...jointArray])]

    
}


module.exports = mergeArrays