/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

                                                    // First Try all my code
function mergeArrays(...arrays) {
    //concat the two arrays into one
    let arrCon = []
    arrays.forEach(array => {
        arrCon = [...arrCon, ...array]  
    })
    // step thru arrCon
    // place unigueitems into new Array
    let uniqueItems = arrCon.filter((c, index) => {
        return arrCon.indexOf(c) === index
    })
    return uniqueItems
}
                                                    // Second Try
// function mergeArrays(...arrays) {
//     let jointArray = []
//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     });
// // ****************** START of My Code Same as chunkArray
//     let uniqueArray = jointArray.filter((c,i) => {
//         return jointArray.indexOf(c) === i
//     })
//     console.log(uniqueArray)
// // ****************** END of My Code Same as chunkArray
//     return [...new Set([...jointArray])]
// }
                                                    // Using Sets set()
// function mergeArrays(...arrays) {
//     let jointArray = []
//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     });
//     return [...new Set([...jointArray])]
// }
                                                    // Using Sets from()
// function mergeArrays(...arrays) {
//     let jointArray = []
//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     });
//     return Array.from(new Set([...jointArray]))
// }
                                                    // Using .filter()
// function mergeArrays(...arrays) {
//     let jointArray = []
//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     })
//     const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
//     return uniqueArray
// }
                                                    // Using .reduce()
// function mergeArrays(...arrays) {
//     let jointArray = []
//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     })
//     const uniqueArray = jointArray.reduce((newArray, item) =>{
//         if (newArray.includes(item)){
//             return newArray
//         } else {
//             return [...newArray, item]
//         }
//     }, [])
//     return uniqueArray
// }

module.exports = mergeArrays