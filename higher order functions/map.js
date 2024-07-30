//  MAP - The map() function applies a given function to each element in an array and returns a new array with the results.

//  behind the scenes code

function map(array, func){
//    create a new array to store new values
    let results = [];

    for (let i = 0; i < array.length; i++){
        results.push(func(array[i])); // apply the fn to each element in the array.
    }

    return results;
}

// example usage
map([1,2,3,4,5], x => x * 2)

//  real life examples
const numbers = [1,2,3,4,5];
numbers.map(x => x * 2);