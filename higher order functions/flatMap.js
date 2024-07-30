/*
The flatMap method first maps each element using a mapping function, 
then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.
*/

function flatMap(array, mapFunc) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let mapped = mapFunc(array[i]);
      result = result.concat(mapped);
    }
    return result;
  }
  
  // Example usage
  const numbers = [1, 2, 3];
  const flatMapped = flatMap(numbers, num => [num, num * 2]);
  
  console.log(flatMapped);
  // → [1, 2, 2, 4, 3, 6]
  