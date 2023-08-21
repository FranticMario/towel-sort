
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined) return []

    const result = matrix.map((item, index) => {
     
     if(index % 2 !== 0) {
     return item.reverse();
     } else {
       return item
     }
    })
   
    
     return result.flat(Infinity);
   }
