/* 
Your own loop


 Write a higher-order function loop that provides something like a for loop statement.
 It should take a value, a test function, an update function, and a body function. 
 Each iteration, it should first run the test function on the current loop value and 
 stop if that returns false. It should then call the body function, giving it the current value, 
 and finally call the update function to create a new value and start over from the beginning.

  When defining the function, you can use a regular loop to do the actual looping.

*/


function loop(value, test, update, body){

    // regular loop and call the function on each element
    for (let i = value; i > 0; i--){ 

      if(!test(value[i])){
        update(value[i]);
        console.log(i);
        }

      }
    return false;
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1


  /*
  
  Everything
   Arrays also have an every method analogous to the some method.
   This method returns true when the given function returns true for every element in the array.
   In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

   Implement every as a function that takes an array and a predicate function as parameters. 
   Write two versions, one using a loop and one using the some method.

*/

function every(array, test) {
    for (let element of array){
      if(!test(element)){
        return false;
      }
    }
    return true;
  }
  
  /* 
   To build every on top of some, we can apply De Morgan’s laws, which state that a && b equals !(!a || !b). 
   This can be generalized to arrays, where all elements in the array match if there is no element in the array 
   that does not match.
  */
  function everyWithSome(array, test){
    return !array.some(element => !test(element));
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true