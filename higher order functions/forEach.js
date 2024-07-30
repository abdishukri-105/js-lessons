/*
The forEach method executes a provided function once 
for each array element. Unlike other array methods, 
forEach does not return a new array; it simply applies 
the function for its side effects (e.g., logging, modifying external variables).
*/

function forEach(array, func){
    for (let i = 0; i < array.length; i++){
        func(array[i], i, array);;
    }
}

// Example usage
const numbers = [1, 2, 3, 4];
forEach(numbers, (number, index) => {
  console.log(`Index: ${index}, Value: ${number}`);
});


//  real life usage

const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});

// Output:
// 1. apple
// 2. banana
// 3. cherry
