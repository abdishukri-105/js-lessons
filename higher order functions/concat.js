/*
The concat method is used to merge two or more arrays. 
This method does not change the existing arrays but instead returns a new array.
*/ 

function concat(...arrays){
    let result = [];

    for (let array of arrays){
        for (let element of array){
            result.push(element);
        }
    }

   return result;
};

// Example usage
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const combined = concat(array1, array2, array3);

console.log(combined);
// → [1, 2, 3, 4, 5, 6, 7, 8, 9]


//  real life usage

const array10 = [1, 2, 3];
const array20 = [4, 5, 6];
const combinedarrays = array10.concat(array20);

console.log(combinedarrays);
// → [1, 2, 3, 4, 5, 6]
