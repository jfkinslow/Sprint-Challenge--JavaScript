// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

let consume = (args) => args.cb(args);

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let add = (args) => args.a + args.b;

let multiply = (args) => args.a * args.b;

let greeting = (args) => `Hello ${args.name}, nice to meet you!`;



/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume({
  a: 2,
  b: 2,
  cb: add
})); // 4
console.log(consume({
  a: 10,
  b: 16,
  cb: multiply
})); // 160
console.log(consume({
  name: 'Mary Poppins',
  cb: greeting
})); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// Because the variable is passed down through the scope chain to any and all nested functions


// const external = "I'm outside the function";

// function myFunction() {
//   console.log(external);
//   const internal = "Hello! I'm inside myFunction!";

//   function nestedFunction() {
//     console.log(internal);
//   };
//   nestedFunction();
// }
// myFunction();

function counterFactory() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  var counter = 0;
  return {inc: () => {
    counter += 1;
    return counter;
  }, dec: () => {
    counter -= 1;
    return counter;
  }};
};

let newCounterFactory = new counterFactory();
console.log(newCounterFactory.inc())
console.log(newCounterFactory.inc())
console.log(newCounterFactory.dec())
console.log(newCounterFactory.inc())
console.log(newCounterFactory.inc())

