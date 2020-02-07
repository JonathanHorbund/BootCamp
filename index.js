/**
 * Activity #1 - Review, Part 1
 *  - Make an object called airplane
 *  - give your airplane three variables:
 *    1. passengerCount (a number)
 *    2. isFlying (a boolean)
 *    3. airlineName (a string)
 */

const airplane = {
  passengers: [],
  isFlying: false,
  airlineName:  "Delta",
}


/**
 * Activity #1 - Review, Part 2
 * - write a function called ejectPassenger
 * - you should be able to pass an airplane object to it
 * - you should decrease the airplane's passengerCount by 1
 * - you should return the airplane's updated passengerCount
 */

function ejectPassenger(airplane ) {
  airplane.passengerCount -= 1;
  return airplane.passengerCount;
}

/**
 * Walkthrough #1 - Arrow Notation
 * - we can rewrite the ejectPassenger function
 *   using arrow notation
 * - recall that functions can be variables!
 * - we can pass an arrow function to another function
 * 
 */

const ejectPassenger = (airplane) => {
  airplane.passengerCount -= 1;
  return airplane.passengerCount;
}
//console.log(ejectPassenger(airplane));


/**
 * Walkthrough #2 - Arrays
 * - have the form of [ ]
 * - arrays in JavaScript are just a list of variables
 * - arrays do not care what the types of those variables are
 */

const arr = [0, false, "item 3"] 


/**
 * Activity #2 - Some array functions
 * - use MDN to find answers to these questions:
 * - how do we add to an array?
 * - how do we access the items in an array?
 * - how do we remove from an array?
 * - how do we remove from the back of an array?
 * 
 * - array.length gets the length of an array
 */

// Add to an array - .push(item)
arr.push("new item");
// console.log(arr)

// Access items in an array - array[index]
let thirdItem = arr[2];
// console.log(thirdItem)

// Remove from an array
// console.log(arr.splice(1, 1))
// console.log(arr)

// Remove from the end of an array - .pop()
// Will also return the value of the item removed
let newArr = arr.pop()



/**
 * Activity #3 - Nested arrays // arrays of objects
 * 
 * - change the passengerCount property of your airplane above
 *   to an empty array called passengers
 * 
 * - create a function called Passenger that constructs an object
 *    1. a Passenger should have a name (string)
 *    2. a Passenger should have an age (number)
 * 
 * - by writing the Passenger object this way, we can easily
 *   create multiple passengers without having to rewrite
 *   all of those brackets, colons, and semicolons
 * 
 * - create at least three Passengers, each with their own name and age
 * 
 * - add the Passengers you just created to the airplane's passenger array
 */

const Passenger = function(name, age) {
  this.name = name;
  this.age = age;
} 

const p1 = new Passenger("Alexa", 20);
const p2 = new Passenger("Jonathan", 20);
const p3 = new Passenger("Sammy", 3);

airplane.passengers.push(p1, p2, p3);
// console.log(airplane.passengers);

/**
 * Activity #4 - Array functions review
 * 
 * - get the 2nd Passenger from the passenger's array
 * - add a new Passenger to the array
 * - remove the 3rd Passenger from the array
 */

// console.log(airplane.passengers[1]);
airplane.passengers.push(new Passenger("Cuervo", 8));
airplane.passengers.splice(2,1);
// console.log(airplane.passengers);




/**
 * Activity #5 - For loops & arrays
 * - write a for loop that iterates over each Passenger in the passenger array
 * 
 * - make the inside of the for loop into its own function.
 *    1. this function should take in a Passenger object, not an index!
 *    2. HINT: get the Passenger object from the array first, then pass it to your function
 *
 */

function printName(passenger) {
    console.log(passenger.name);
}

// for (let i = 0; i < airplane.passengers.length; i++) {
//   printName(airplane.passengers[i]);
// }

/**
 * Walkthrough #2 - Declarative functions
 * - we can rewrite a for loop using the array.forEach function
 */

//airplane.passengers.forEach(printName)

/**
 * Activity #6 - Declaration array functions
 *  - use MDN to find answers to these questions:
 * - what does array.map do?
 *    • creates a new array with the contents modified by a function
 * - what does array.filter do?
 *    • creates a new array with the contents filtered by a function
 * - what does array.find do?
 *    • returns the value of the first element in the array meeting the function
 * - what does array.include do?
 *    • returns a boolean whether or not an array includes a value
 */

// const ages = airplane.passengers.map((passenger) => {return passenger.age})

// console.log(ages)

/**
 * Walkthrough #3 - Get Passenger names with array.map
 * - we can get the names of each Passenger in the
 *   airplane.passengers array using array.map
 * - try doing that with ages of Passengers too!
 */


/**
 * Activity #7 - Filter/find Passengers
 * - use MDN as a guide!
 * 
 * - filter Passengers by their age
 * 
 * - find a Passenger by their name, ie.
 *   pick one of your names and search for it
 */

const filtered = airplane.passengers.filter(passenger => passenger.age > 10)
console.log(filtered)
const ben = airplane.passengers.find(passenger => passenger.name == "Ben");
console.log(ben)



/**
 * CHALLENGES!
 * 
 * 1. Where's Waldo
 * - using a for loop, add 100 Passengers to the passenger array
 * - give each of these Passengers a random age (not required, but still fun!)
 * - give each of your Passengers the same name, but don't make it Waldo
 * - add a Passenger named Waldo to the passenger array
 * - using array.find - find Waldo!
 * 
 * 2. Boomer Ejection
 * - write a function called ejectBoomers that ejects (removes) Passengers over a certain age
 * - the function has to use one of the declarative functions we learned in class (ie. array.find)
 * 
 * 3. Abracadabra
 * - write a function called castSpell that turns all the Passengers into Frogs
 * - each Frog should have a name and an age
 * - the age of the Frog is cut in half
 * - the name of the Frog should be "Frog [Name]" where [Name] is the name of associated Passenger
 * - HINT: use array.map
 */