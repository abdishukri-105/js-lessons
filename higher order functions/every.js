

// opposite of some()

function every(array, test){
    for(let i = 0; i < array.length; i++){
        if(!test(array[i])){
            return false;
        }
    }

    return true;
}




// Example usage
const numbers = [2, 4, 6, 8];
const allEven = every(numbers, number => number % 2 === 0);

console.log(allEven);
// → true