/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// FAILED i think instructions are wrong. should be Create an ${array} of ${size}
function chunkArray(array, size) {
    //concat the two arrays into one
    let arrCon = [...array, size]
    // step thru arrCon
    // place unigueitems into new Array
    let uniqueItems = arrCon.filter((c, index) => {
        return arrCon.indexOf(c) === index
    })

    return uniqueItems
}


module.exports = chunkArray