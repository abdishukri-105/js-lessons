/*
The findIndex method returns the index of the first element in the array 
that satisfies the provided test function. If no elements satisfy the test function, it returns -1.
*/

function findIndex(array, test){
    for (let i = 0; i < array.length; i++){
        if (test(array[i])){
            return i
        }
    }

    return -1;
}

// Example usage
const numbers = [1, 3, 5, 6, 7];
const firstEvenIndex = findIndex(numbers, number => number % 2 === 0);

console.log(firstEvenIndex);
// → 3