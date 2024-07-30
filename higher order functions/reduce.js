//  REDUCE


/*
The reduce method processes each element of an array 
and combines them into a single accumulated result. 
It does this by applying a provided reducer function to each 
element, starting from an initial value (or the first element of the
array if no initial value is provided).

 */

// reduce behind the scenes 
function reduce(array, combine, start){

    let current = start;

    for( let element of array){
        current = combine(current, element)
    }

    return current;
};


// Example usage
const numberss = [1, 2, 3, 4];
const sums = reduce(numbers, (a, b) => a + b, 0);

console.log(sum);
// → 10


//  reduce in real life 

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, number) => total + number, 0);

console.log(sum);


let arrays = [[1, 2, 3], [4, 5], [6]];

let flattenedArray = arrays.reduce((acc, currentArray) => acc.concat(currentArray), []);

console.log(flattenedArray);
// → [1, 2, 3, 4, 5, 6]
