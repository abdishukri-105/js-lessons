/*
The find method returns the value of the first element in the array 
that satisfies the provided test function. 

If no elements satisfy the test function, it returns undefined.
*/

function find(array, test){

    for (let i = 0; i < array.length; i++){

        if(test(array[i])){

            return array[i];
        }
    }

    return undefined;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const firstEven = find(numbers, number => number % 2 === 0);

console.log(firstEven);
// → 2