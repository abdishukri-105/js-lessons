/*
The some method tests whether at least one element in the array passes 
the test implemented by the provided function. 

It returns a Boolean value: true if at least one element passes the test, and false otherwise.

*/


function some(array, test){

    for (let i = 0; i < array.length; i++){
        if(test(array[i])){
            return true;
        };
    };
  
    return false;

};

// Example usage
const numbers = [1, 2, 3, 4, 5];
const hasEven = some(numbers, number => number % 2 === 0);

console.log(hasEven);
// → true