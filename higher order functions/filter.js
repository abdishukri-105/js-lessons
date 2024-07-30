//  Filter 

function filter(array, test){

    let result = [];

    for (let i = 0; i < array.length; i++){

        if(test(array[i])){
            result.push(array[i])
        }
    }

    return result
}

filter([1,2,3,4,5,6,], x => x % 2 === 0) 